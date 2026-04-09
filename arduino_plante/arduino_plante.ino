/*********** PINS ***********/
#define TEMP_HUM_PIN 13        // capteur DHT
#define SOIL_PIN A0
#define PUMP_PIN 3

/*********** LIB ***********/
#include <DHT.h>
#define DHTTYPE DHT11
DHT dht(TEMP_HUM_PIN, DHTTYPE);

/*********** CONSTANTES ***********/
unsigned long readInterval = 3000;
unsigned long avgInterval = 30000;
unsigned long pumpMaxTime = 1000;

/*********** VARIABLES ***********/
unsigned long lastRead = 0;
unsigned long lastAvg = 0;

float tempSum = 0;
float humSum = 0;
float soilSum = 0;
int count = 0;

float tempAvg = 0;
float humAvg = 0;
float soilAvg = 0;

/*********** SETUP ***********/
void setup() {

  Serial.begin(9600);
  dht.begin();
  pinMode(PUMP_PIN, OUTPUT);
}

/*********** LOOP ***********/
void loop() {

  unsigned long current = millis();

  /*********** LECTURE CAPTEURS ***********/
  if (current - lastRead >= readInterval) {

    lastRead = current;

    float t = dht.readTemperature();
    float h = dht.readHumidity();

    int rawSoil = analogRead(SOIL_PIN);

    // calibration simple (adapter selon capteur)
    float soilPercent = map(rawSoil, 300, 800, 0, 100);
    soilPercent = constrain(soilPercent, 0, 100);

    if (!isnan(t) && !isnan(h)) {

      tempSum += t;
      humSum += h;
      soilSum += soilPercent;
      count++;
    }
  }

  /*********** CALCUL MOYENNE ***********/
  if (current - lastAvg >= avgInterval && count > 0) {

    lastAvg = current;

    tempAvg = tempSum / count;
    humAvg = humSum / count;
    soilAvg = soilSum / count;

    tempSum = 0;
    humSum = 0;
    soilSum = 0;
    count = 0;

    /*********** AFFICHAGE ***********/
    Serial.print("TEMP:");
    Serial.print(tempAvg);
    Serial.print(",HUM:");
    Serial.print(humAvg);
    Serial.print(",SOIL:");
    Serial.println(soilAvg);
  }

  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\n');

    if (cmd == "PUMP_ON") {
      // TODO : activer la pompe pendant pumpMaxTime ms
    }
  }
}