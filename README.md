# Projekt einrichten 

<pre>
# Ordner erstellen und hineinwechseln
mkdir mein-ts-cli
cd mein-ts-cli

# npm-Projekt initialisieren
npm init -y

# TypeScript und Typen für Node.js als Entwicklungsabhängigkeiten installieren
npm install -D typescript @types/node

# Commander für die Parameterverarbeitung als normale Abhängigkeit installieren
npm install commander

# TypeScript-Konfigurationsdatei erstellen
npx tsc --init
</pre>


# 🚀 TypeScript CLI Template

Ein robustes Grundgerüst für moderne Command-Line-Tools mit Node.js und TypeScript.

## 🛠 Features

* **TypeScript 5+** mit strikten Typ-Checks.
* **ES-Modules (ESM)** Support für moderne Import/Export-Syntax.
* **Commander.js** für professionelles Argument-Parsing.
* **Ready-to-run**: Vorkonfiguriert für globale Installation via `npm link`.

## 📋 Voraussetzungen

* [Node.js](https://nodejs.org/) (Empfohlen: v18 oder höher)
* [npm](https://www.npmjs.com/)

## 🚀 Erste Schritte

### 1. Installation
Klone das Repository oder kopiere die Dateien und installiere die Abhängigkeiten:

```bash
npm install