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
      document.getElementById("light-healing-max").textContent = lightHealingMax;
      document.getElementById("light-healing-min").textContent = lightHealingMin;
      document.getElementById("intense-healing-max").textContent = intenseHealingMax;
      document.getElementById("intense-healing-min").textContent = intenseHealingMin;
      document.getElementById("wound-cleansing-max").textContent = woundCleansingMax;
      document.getElementById("wound-cleansing-min").textContent = woundCleansingMin;
      document.getElementById("mass-healing-max").textContent = massHealingMax;
      document.getElementById("mass-healing-min").textContent = massHealingMin;
      document.getElementById("ultimate-healing-max").textContent = ultimateHealingMax;
      document.getElementById("ultimate-healing-min").textContent = ultimateHealingMin;
      document.getElementById("holy-missile-max").textContent = holyMissileMax;
      document.getElementById("holy-missile-min").textContent = holyMissileMin;
      document.getElementById("sudden-death-max").textContent = suddenDeathMax;
      document.getElementById("sudden-death-min").textContent = suddenDeathMin;
      document.getElementById("thunderstorm-stone-shower-max").textContent = thunderstormStoneShowerMax;
      document.getElementById("thunderstorm-stone-shower-min").textContent = thunderstormStoneShowerMin;
      document.getElementById("avalanche-great-fireball-max").textContent = avalancheGreatFireballMax;
      document.getElementById("avalanche-great-fireball-min").textContent = avalancheGreatFireballMin;
      document.getElementById("energy-beam-max").textContent = energyBeamMax;
      document.getElementById("energy-beam-min").textContent = energyBeamMin;
      document.getElementById("great-energy-beam-max").textContent = greatEnergyBeamMax;
      document.getElementById("great-energy-beam-min").textContent = greatEnergyBeamMin;
      document.getElementById("divine-caldera-max").textContent = divineCalderaMax;
      document.getElementById("divine-caldera-min").textContent = divineCalderaMin;
      document.getElementById("terra-wave-max").textContent = terraWaveMax;
      document.getElementById("terra-wave-min").textContent = terraWaveMin;
      document.getElementById("energy-wave-max").textContent = energyWaveMax;
      document.getElementById("energy-wave-min").textContent = energyWaveMin;
      document.getElementById("rage-of-the-skies-max").textContent = rageOfTheSkiesMax;
      document.getElementById("rage-of-the-skies-min").textContent = rageOfTheSkiesMin;
      document.getElementById("hells-core-max").textContent = hellsCoreMax;
      document.getElementById("hells-core-min").textContent = hellsCoreMin;
      document.getElementById("wrath-of-nature-max").textContent = wrathOfNatureMax;
      document.getElementById("wrath-of-nature-min").textContent = wrathOfNatureMin;
      document.getElementById("eternal-winter-max").textContent = eternalWinterMax;
      document.getElementById("eternal-winter-min").textContent = eternalWinterMin;


      
  }