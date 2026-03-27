#!/usr/bin/env node

import process from 'node:process';
import { Command } from 'commander';

const program = new Command();

// Basis-Informationen über dein CLI
program
  .name('mein-cli')
  .description('Ein TypeScript CLI Template')
  .version('1.0.0');

// Ein Beispiel-Befehl mit Parameter und optionalem Flag
program
  .command('greet')
  .description('Grüßt eine Person')
  .argument('<name>', 'Der Name der zu grüßenden Person') // Erforderlicher Parameter
  .option('-u, --uppercase', 'Gibt den Namen in Großbuchstaben aus') // Optionaler Parameter (Flag)
  .action((name: string, options: { uppercase?: boolean }) => {
    
    // Logik deiner Anwendung
    const greetingName = options.uppercase ? name.toUpperCase() : name;
    console.log(`Hallo, ${greetingName}! Willkommen in deinem neuen CLI.`);
    
  });

// Parsen der Kommandozeilenargumente (wichtig, damit commander arbeitet!)
program.parse(process.argv);