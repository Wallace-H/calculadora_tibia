function calcular() {
    const lvl = parseInt(document.getElementById('lvl').value);
    const mlvl = parseInt(document.getElementById('mlvl').value);
  
    // Magias de Cura
    const lightHealingMax = ((lvl * 0.2) + (mlvl * 1.795) + 11).toFixed(0);
    const lightHealingMin = ((lvl * 0.2) + (mlvl * 1.4) + 8).toFixed(0);
    const intenseHealingMax = ((lvl * 0.2) + (mlvl * 5.59) + 35).toFixed(0);
    const intenseHealingMin = ((lvl * 0.2) + (mlvl * 3.184) + 20).toFixed(0);
    const woundCleansingMax = ((lvl * 0.2) + (mlvl * 7.95) + 51).toFixed(0);
    const woundCleansingMin = ((lvl * 0.2) + (mlvl * 4) + 25).toFixed(0);
    const massHealingMax = ((lvl * 0.2) + (mlvl * 10.43) + 62).toFixed(0);
    const massHealingMin = ((lvl * 0.2) + (mlvl * 5.7) + 26).toFixed(0);
    const ultimateHealingMax = ((lvl * 0.2) + (mlvl * 12.79) + 79).toFixed(0);
    const ultimateHealingMin = ((lvl * 0.2) + (mlvl * 7.22) + 44).toFixed(0);
  
    // Runas de Ataque
    const holyMissileMax = ((lvl * 0.2) + (mlvl * 3.75) + 24).toFixed(0);
    const holyMissileMin = ((lvl * 0.2) + (mlvl * 1.79) + 11).toFixed(0);
    const suddenDeathMax = ((lvl * 0.2) + (mlvl * 7.395) + 46).toFixed(0);
    const suddenDeathMin = ((lvl * 0.2) + (mlvl * 4.605) + 28).toFixed(0);
    const thunderstormStoneShowerMax = ((lvl * 0.2) + (mlvl * 2.6) + 16).toFixed(0);
    const thunderstormStoneShowerMin = ((lvl * 0.2) + (mlvl * 1) + 6).toFixed(0);
    const avalancheGreatFireballMax = ((lvl * 0.2) + (mlvl * 2.8) + 17).toFixed(0);
    const avalancheGreatFireballMin = ((lvl * 0.2) + (mlvl * 1.2) + 7).toFixed(0);

    // Magias de Ataque
    const energyBeamMax = ((lvl / 5) + (mlvl * 4)).toFixed(0)
    const energyBeamMin = ((lvl / 5) + (mlvl * 2.5)).toFixed(0)
    const greatEnergyBeamMax = ((lvl / 5) + (mlvl * 7)).toFixed(0)
    const greatEnergyBeamMin = ((lvl / 5) + (mlvl * 4)).toFixed(0)
    const divineCalderaMax = ((lvl / 5) + (mlvl * 6)).toFixed(0)
    const divineCalderaMin = ((lvl / 5) + (mlvl * 4)).toFixed(0)
    const terraWaveMax = ((lvl / 5) + (mlvl * 7)).toFixed(0)
    const terraWaveMin = ((lvl / 5) + (mlvl * 3.5)).toFixed(0)
    const energyWaveMax = ((lvl / 5) + (mlvl * 9)).toFixed(0)
    const energyWaveMin = ((lvl / 5) + (mlvl * 4.5)).toFixed(0)
    const rageOfTheSkiesMax = ((lvl / 5) + (mlvl * 12)).toFixed(0)
    const rageOfTheSkiesMin = ((lvl / 5) + (mlvl * 5)).toFixed(0)
    const hellsCoreMax = ((lvl / 5) + (mlvl * 14)).toFixed(0)
    const hellsCoreMin = ((lvl / 5) + (mlvl * 7)).toFixed(0)
    const wrathOfNatureMax = ((lvl / 5) + (mlvl * 10)).toFixed(0)
    const wrathOfNatureMin = ((lvl / 5) + (mlvl * 5)).toFixed(0)
    const eternalWinterMax = ((lvl / 5) + (mlvl * 12)).toFixed(0)
    const eternalWinterMin = ((lvl / 5) + (mlvl * 6)).toFixed(0)
  
      // mostrar resultados
      const spells = {
        "light-healing": [lightHealingMax, lightHealingMin],
        "intense-healing": [intenseHealingMax, intenseHealingMin],
        "wound-cleansing": [woundCleansingMax, woundCleansingMin],
        "mass-healing": [massHealingMax, massHealingMin],
        "ultimate-healing": [ultimateHealingMax, ultimateHealingMin],
        "holy-missile": [holyMissileMax, holyMissileMin],
        "sudden-death": [suddenDeathMax, suddenDeathMin],
        "thunderstorm-stone-shower": [thunderstormStoneShowerMax, thunderstormStoneShowerMin],
        "avalanche-great-fireball": [avalancheGreatFireballMax, avalancheGreatFireballMin],
        "energy-beam": [energyBeamMax, energyBeamMin],
        "great-energy-beam": [greatEnergyBeamMax, greatEnergyBeamMin],
        "divine-caldera": [divineCalderaMax, divineCalderaMin],
        "terra-wave": [terraWaveMax, terraWaveMin],
        "energy-wave": [energyWaveMax, energyWaveMin],
        "rage-of-the-skies": [rageOfTheSkiesMax, rageOfTheSkiesMin],
        "hells-core": [hellsCoreMax, hellsCoreMin],
        "wrath-of-nature": [wrathOfNatureMax, wrathOfNatureMin],
        "eternal-winter": [eternalWinterMax, eternalWinterMin]
      };
      
      for (const spell in spells) {
        const maxElem = document.getElementById(spell + "-max");
        const minElem = document.getElementById(spell + "-min");
        maxElem.textContent = spells[spell][0];
        minElem.textContent = spells[spell][1];
      }
      


      
  }