function commonsFile(title) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(title)}`;
}

// Keep Wikimedia file titles here instead of hard-coding upload URLs by hand.
// index.html resolves these redirect-style URLs to direct thumbnail URLs at runtime.
function vallandroFile(name) {
  return `https://www.vallandro.it/wp-content/uploads/${name}`;
}

function biellaFile(name) {
  return `https://rifugiobiella.it/wp-content/uploads/${name}`;
}

function rotstockFile(name) {
  return `https://www.rotstockhuette.ch/images/${name}`;
}

function schesaplanaFile(name) {
  return `https://www.schesaplana-huette.ch/wp-content/uploads/${name}`;
}

// The HTML includes two core images per day card. This file appends eight more so each day ends
// up with ten media tiles and shows route terrain, crux-like sections, and the hut or day-end stop.
window.extraDayPhotos = {
  "karwendel-day1": [
    { src: commonsFile("Halltal.jpg"), alt: "Halltal valley terrain", caption: "Trail: lower Halltal valley terrain" },
    { src: commonsFile("Roßkopf (Halltal) from E.JPG"), alt: "Halltal side terrain in the Karwendel", caption: "Trail: Halltal side terrain" },
    { src: commonsFile("Blick aufs Halltal vom Stempeljoch.JPG"), alt: "View toward Halltal from above", caption: "Trail: upper line above Halltal" },
    { src: commonsFile("Blick aufs Halltal vom Stempeljoch 2.JPG"), alt: "Second view toward Halltal", caption: "Trail: valley line from the upper route" },
    { src: commonsFile("Bettelwurfhuette.JPG"), alt: "Bettelwurfhütte near the trail line", caption: "Trail: final approach to the hut area" },
    { src: commonsFile("Bettelwurfhütte (DSC02404).jpg"), alt: "Bettelwurfhütte exterior detail", caption: "Stop: Bettelwurfhütte exterior detail" },
    { src: commonsFile("Bettelwurfhütte (DSC02414).jpg"), alt: "Bettelwurfhütte and surrounding path", caption: "Stop: hut and immediate terrain" },
    { src: commonsFile("Bettelwurfhütte (DSC02422).jpg"), alt: "Bettelwurfhütte from another angle", caption: "Stop: second hut view" }
  ],
  "karwendel-day2": [
    { src: commonsFile("Speckkarspitze HQ.jpg"), alt: "Speckkarspitze summit shape", caption: "Trail context: summit shape from the approach side" },
    { src: commonsFile("Speckkarspitze from IBK.JPG"), alt: "Speckkarspitze seen from Innsbruck side", caption: "Trail context: summit massif from farther out" },
    { src: commonsFile("Speckkarspitze von SE.jpg"), alt: "Speckkarspitze from the southeast", caption: "Trail: southeast summit-side terrain" },
    { src: commonsFile("Hundskopf, Fürleg, Bettelwurf and Speckkarspitze.jpg"), alt: "Karwendel ridge terrain around Speckkarspitze", caption: "Trail context: ridge terrain around the summit" },
    { src: commonsFile("Speckkarspitze, Bettelwurf und Hohe Fürleg.jpg"), alt: "Speckkarspitze and surrounding ridge line", caption: "Trail: ridge line above Bettelwurfhütte" },
    { src: commonsFile("Speckkarspitze SE.JPG"), alt: "Speckkarspitze southeast face", caption: "Trail: summit-side rocky terrain" },
    { src: commonsFile("Speckkarspitze west 20160730.jpg"), alt: "Speckkarspitze from the west", caption: "Trail context: western side of the summit day" },
    { src: commonsFile("Bettelwurfhütte (DSC02417).jpg"), alt: "Bettelwurfhütte terrace and terrain", caption: "Stop: second hut-side view" }
  ],
  "karwendel-day3": [
    { src: commonsFile("Stempeljochspitze IBK.JPG"), alt: "Stempeljoch area in the Karwendel", caption: "Trail: Stempeljoch terrain" },
    { src: commonsFile("Rosskopf und Stempeljochspitze.jpg"), alt: "Rosskopf and Stempeljochspitze terrain", caption: "Trail: ridge-side traverse terrain" },
    { src: commonsFile("Goetheweg at Pfeisalm NSG Karwendel 2023-09-25 01.jpg"), alt: "Trail near Pfeisalm", caption: "Trail: route line near Pfeisalm" },
    { src: commonsFile("Goetheweg at Pfeisalm NSG Karwendel 2023-09-25 03.jpg"), alt: "Goetheweg section near Pfeisalm", caption: "Trail: broad route line near Pfeisalm" },
    { src: commonsFile("Goetheweg at Pfeisalm NSG Karwendel 2023-09-25 06.jpg"), alt: "Goetheweg terrain in the Karwendel", caption: "Trail: broken limestone terrain" },
    { src: commonsFile("Pfeishütte Wegweiser an Felswand 2016-07.jpg"), alt: "Trail sign near Pfeishütte", caption: "Trail: route marker close to the hut" },
    { src: commonsFile("Pfeishuette vor Sonntagkar HQ.jpg"), alt: "Pfeishütte and surroundings", caption: "Stop: Pfeishütte setting" },
    { src: commonsFile("Pfeishütte W 2016-07.jpg"), alt: "Pfeishütte from the west", caption: "Stop: second hut view" }
  ],
  "karwendel-day4": [
    { src: commonsFile("Goetheweg im Karwendel.JPG"), alt: "Goetheweg in the Karwendel", caption: "Trail: Goetheweg section" },
    { src: commonsFile("Goetheweg NSG Karwendel 2023-09-25 01.jpg"), alt: "Goetheweg trail line", caption: "Trail: contouring path above Innsbruck" },
    { src: commonsFile("Goetheweg NSG Karwendel 2023-09-25 03.jpg"), alt: "Goetheweg terrain toward Hafelekar", caption: "Trail: upper exit terrain" },
    { src: commonsFile("Zugspitzblick Goetheweg NSG Karwendel 2023-09-25 01.jpg"), alt: "Goetheweg panorama", caption: "Trail context: high traverse on the exit day" },
    { src: commonsFile("Innsbruck from Goetheweg trail.jpg"), alt: "Innsbruck seen from the Goetheweg", caption: "Trail: city-side view from the high route" },
    { src: commonsFile("Innsbruck seen from Goetheweg LSG Nordkette 2023-09-25 01.jpg"), alt: "Innsbruck seen from the Nordkette side", caption: "Trail: final approach toward Hafelekar" },
    { src: commonsFile("Innsbruck seen from Goetheweg LSG Nordkette 2023-09-25 02.jpg"), alt: "Second view of Innsbruck from the Goetheweg", caption: "Trail: exit line above Innsbruck" },
    { src: commonsFile("Hafelekar0016.JPG"), alt: "Hafelekar terrain and structures", caption: "Stop: Hafelekar ridge exit" }
  ],

  "stubai-day1": [
    { src: commonsFile("Stubai Alps - trail 6.jpg"), alt: "Stubai trail section", caption: "Trail: lower Stubai approach terrain" },
    { src: commonsFile("Stubai Alps - trail 5.jpg"), alt: "Stubai hiking path", caption: "Trail: valley-side path toward the hut" },
    { src: commonsFile("Stubai Alps - trail 4.jpg"), alt: "Stubai alpine terrain", caption: "Trail: alpine terrain on the approach" },
    { src: commonsFile("Stubai Alps - trail 8.jpg"), alt: "Stubai route line", caption: "Trail: broad path in the upper valley" },
    { src: commonsFile("Stubai Alps - trail 3.jpg"), alt: "Stubai route terrain", caption: "Trail: upper approach terrain" },
    { src: commonsFile("NederElfer.jpg"), alt: "Neder and the surrounding Stubai terrain", caption: "Trail context: valley start near Neder" },
    { src: commonsFile("Innsbrucker Hütte (DSC00659).jpg"), alt: "Innsbrucker Hütte exterior detail", caption: "Stop: hut exterior detail" },
    { src: commonsFile("Innsbrucker-Hütte-gegen-Kalkwand.jpg"), alt: "Innsbrucker Hütte with surrounding mountains", caption: "Stop: hut setting in the Stubai" }
  ],
  "stubai-day2": [
    { src: commonsFile("Gipfel Habicht.JPG"), alt: "Habicht summit area", caption: "Summit: top area on Habicht" },
    { src: commonsFile("Habicht (Südseite).jpg"), alt: "Habicht south side", caption: "Trail: south-side summit terrain" },
    { src: commonsFile("Habicht N.JPG"), alt: "Habicht north side terrain", caption: "Trail context: summit massif from another side" },
    { src: commonsFile("Habicht NO.JPG"), alt: "Habicht northeast side", caption: "Trail: steep summit-side terrain" },
    { src: commonsFile("Habicht von Südwesten.JPG"), alt: "Habicht from the southwest", caption: "Trail context: summit line from the southwest" },
    { src: commonsFile("Habicht, Blick nach Süden.JPG"), alt: "View from Habicht toward the south", caption: "Summit: view from the top area" },
    { src: commonsFile("Innsbrucker-Hütte-gegen-Habicht.jpg"), alt: "Innsbrucker Hütte with Habicht above", caption: "Stop: hut below the summit day" },
    { src: commonsFile("Innsbrucker-Hütte-gegen-Habicht-02.jpg"), alt: "Second Innsbrucker Hütte and Habicht view", caption: "Stop: second hut-side view" }
  ],
  "stubai-day3": [
    { src: commonsFile("Stubai Alps - trail 9.jpg"), alt: "High Stubai trail", caption: "Trail: high traverse section" },
    { src: commonsFile("Stubai Alps - trail.jpg"), alt: "Stubai trail on the traverse", caption: "Trail: broken rock and path line" },
    { src: commonsFile("Stubai Alps 8.jpg"), alt: "Stubai mountain terrain", caption: "Trail context: high alpine terrain between the huts" },
    { src: commonsFile("Wetterspitzen (Stubaier Alpen).jpg"), alt: "Wetterspitzen in the Stubai Alps", caption: "Trail context: terrain on the transfer day" },
    { src: commonsFile("Bremer Hütte (DSC00826).jpg"), alt: "Bremer Hütte exterior detail", caption: "Stop: Bremer Hütte exterior detail" },
    { src: commonsFile("Bremer Hütte (DSC00816).jpg"), alt: "Bremer Hütte with surrounding slopes", caption: "Stop: hut and immediate terrain" },
    { src: commonsFile("Bremer Hütte 2009.jpg"), alt: "Bremer Hütte from farther away", caption: "Stop: second hut view" },
    { src: commonsFile("Bremer Hütte gegen Innere Wetterspitze.jpg"), alt: "Bremer Hütte against the Innere Wetterspitze", caption: "Stop: hut setting in the upper valley" }
  ],
  "stubai-day4": [
    { src: commonsFile("Gschnitztal 2006.jpg"), alt: "Gschnitztal terrain", caption: "Trail: upper descent into the valley" },
    { src: commonsFile("Gschnitztal Panorama.jpg"), alt: "Gschnitztal panorama", caption: "Trail context: valley line toward Gschnitz" },
    { src: commonsFile("Gschnitztal-Wetterspitze.jpg"), alt: "Gschnitztal with surrounding peaks", caption: "Trail: broad valley terrain" },
    { src: commonsFile("Gschnitztal - Talabschluss.jpg"), alt: "End of the Gschnitztal valley", caption: "Trail: final descent section" },
    { src: commonsFile("Morning light in Gschnitztal.jpg"), alt: "Morning light in Gschnitztal", caption: "Trail context: valley floor terrain" },
    { src: commonsFile("Mühlendorf Gschnitz 22.jpg"), alt: "Gschnitz village scene", caption: "Stop: Gschnitz village edge" },
    { src: commonsFile("Mühlendorf Gschnitz 10.jpg"), alt: "Historic buildings in Gschnitz", caption: "Stop: second valley-exit view" },
    { src: commonsFile("Gschnitz 14.JPG"), alt: "Gschnitz and surrounding slopes", caption: "Stop: Gschnitz transport exit area" }
  ],

  "dolomites-day1": [
    { src: commonsFile("Prato Piazza 01.jpg"), alt: "Prato Piazza trail", caption: "Trail: Prato Piazza meadow track" },
    { src: commonsFile("Prato Piazza 02.jpg"), alt: "Prato Piazza terrain", caption: "Trail: plateau terrain" },
    { src: commonsFile("Prato Piazza 03.jpg"), alt: "Prato Piazza wide path", caption: "Trail: broad path across the plateau" },
    { src: commonsFile("Prato Piazza 04.jpg"), alt: "Prato Piazza path and meadow", caption: "Trail: open walking terrain" },
    { src: commonsFile("Picco di Vallandro - Inizio sentiero n 40.JPG"), alt: "Trail sign toward Picco di Vallandro", caption: "Trail: signposted path toward the Vallandro side" },
    { src: vallandroFile("duerrensteinhuette_prags_sommer20.jpg"), alt: "Hiking terrain near Vallandro", caption: "Trail: summer terrain near Vallandro" },
    { src: commonsFile("Prato, Piazza Plätzwiese, Dolomiten - panoramio.jpg"), alt: "Track across Prato Piazza", caption: "Trail: broad track across Prato Piazza" },
    { src: commonsFile("Pragser Dolomiten Plätzwiese-2017-09-21-16-25-30-HDR.jpg"), alt: "Prato Piazza terrain in the Pragser Dolomites", caption: "Trail: open plateau walking terrain" }
  ],
  "dolomites-day2": [
    { src: commonsFile("Dürrenstein2.JPG"), alt: "Durrenstein from the approach side", caption: "Trail context: summit massif seen from the approach side" },
    { src: commonsFile("Picco di Vallandro - tratto attrezzato.JPG"), alt: "Protected section on Picco di Vallandro", caption: "Crux: protected section near the top" },
    { src: commonsFile("Salita al picco di Vallandro - panoramio.jpg"), alt: "Upper slope on Durrenstein", caption: "Trail: upper slope toward the summit" },
    { src: commonsFile("Dürrenstein Aussicht.jpg"), alt: "View from Durrenstein", caption: "Summit area: exposed upper terrain" },
    { src: commonsFile("Dürrenstein Gipfelkreuz.jpg"), alt: "Summit cross on Durrenstein", caption: "Summit: final top section" },
    { src: commonsFile("Picco di Vallandro - croce vetta.JPG"), alt: "Cross on Picco di Vallandro", caption: "Summit: top platform" },
    { src: commonsFile("Picco di Vallandro - panoramio - ildirettore (1).jpg"), alt: "Upper terrain on Picco di Vallandro", caption: "Trail: upper approach terrain" },
    { src: commonsFile("Picco di Vallandro - panoramio - ildirettore (2).jpg"), alt: "Summit-side terrain on Picco di Vallandro", caption: "Trail: summit-side terrain" }
  ],
  "dolomites-day3": [
    { src: biellaFile("2023/07/sentiero-rif-biella.jpg"), alt: "Path near Rifugio Biella", caption: "Trail: approach path near Biella" },
    { src: biellaFile("2023/06/laghetto-gran-de-foses.jpg"), alt: "Terrain near Gran de Foses lake", caption: "Trail: terrain near the traverse line" },
    { src: biellaFile("2023/06/malga-vicino-rifugio-biella.jpg"), alt: "Terrain near Biella hut", caption: "Trail: terrain near Biella" },
    { src: biellaFile("2023/07/dal-rif-biella.jpg"), alt: "View from Rifugio Biella", caption: "Trail: terrain around the hut approach" },
    { src: biellaFile("2023/08/DSC-2393.jpg"), alt: "Path and terrain near Rifugio Biella", caption: "Trail: stony walking terrain" },
    { src: biellaFile("2023/08/DSC-2429.jpg"), alt: "Terrain near the Biella route", caption: "Trail: route terrain around Biella" },
    { src: biellaFile("2025/10/Rifugio-biella-2025-1.jpg"), alt: "Rifugio Biella and approach slopes", caption: "Stop: hut setting on the plateau edge" },
    { src: biellaFile("2025/10/Rifugio-biella-2025-16.jpg"), alt: "Rifugio Biella near surrounding terrain", caption: "Stop: Biella hut area and immediate terrain" }
  ],
  "dolomites-day4": [
    { src: commonsFile("Croda del Becco - salita.JPG"), alt: "Croda del Becco ascent", caption: "Trail: upper path on the Seekofel side" },
    { src: commonsFile("Croda del Becco and Rifugio Biella 202008.jpg"), alt: "Croda del Becco and Rifugio Biella", caption: "Trail: terrain above Biella" },
    { src: commonsFile("Giro del Lago di Braies.jpg"), alt: "Walking path around Lago di Braies", caption: "Trail: path near the valley exit" },
    { src: commonsFile("Pragser Wildsee 05.jpg"), alt: "Lago di Braies and surrounding path", caption: "Trail: path near the lake" },
    { src: commonsFile("ITA Braies, Lago di Braies 003.jpg"), alt: "Lago di Braies shoreline path", caption: "Trail: lower lake-side terrain" },
    { src: commonsFile("ITA Braies, Lago di Braies 014.jpg"), alt: "Lago di Braies and surrounding slopes", caption: "Trail: final terrain near the roadhead" },
    { src: commonsFile("Lago di Braies South Tyrol 5.jpg"), alt: "Lago di Braies shore path", caption: "Trail: shore-side walking line" },
    { src: commonsFile("Pragser Wildsee und Seekofel 2.jpg"), alt: "Pragser Wildsee with Seekofel above", caption: "Trail context: valley exit below Seekofel" }
  ],

  "bernese-day1": [
    { src: commonsFile("Hiking trail at Mürren, Bern, Switzerland, 2012 August.jpg"), alt: "Hiking trail at Mürren", caption: "Trail: Mürren hillside path" },
    { src: commonsFile("Hillside landscape at Mürren, Bern, Switzerland, 2012 August.jpg"), alt: "Hillside landscape near Mürren", caption: "Trail: hillside terrain near Mürren" },
    { src: commonsFile("Cows by road near Mürren, Bern, Switzerland, 2012 August.jpg"), alt: "Road and path near Mürren", caption: "Trail: track near the village side" },
    { src: commonsFile("Bergbahn Lauterbrunnen-Mürren 2018-09-05 13.30.53.jpg"), alt: "Path beside the Lauterbrunnen-Mürren railway", caption: "Trail: transport-side path into the mountain approach" },
    { src: commonsFile("From cable car above Blumental, Bern, Switzerland, 2012 August.jpg"), alt: "Slope above Blumental", caption: "Trail: slope above the valley side" },
    { src: rotstockFile("2021/01/22/bild4.png"), alt: "Approach route to Rotstockhütte", caption: "Trail: Rotstockhütte approach" },
    { src: commonsFile("Resting point with view to Bernese Alps at Mürren, Bern, Switzerland, 2012 August.jpg"), alt: "Resting point on the path near Mürren", caption: "Trail: broad path and rest point near Mürren" },
    { src: rotstockFile("2022/09/27/rotstockhtte-1.jpg"), alt: "Rotstockhütte and surroundings", caption: "Stop: Rotstockhütte setting" }
  ],
  "bernese-day2": [
    { src: rotstockFile("2021/01/22/bild1.png"), alt: "Route image near Rotstockhütte", caption: "Trail: upper route from Rotstockhütte" },
    { src: rotstockFile("2021/01/22/bild2.png"), alt: "Route image toward Schilthorn side", caption: "Trail: route line toward Schilthorn" },
    { src: rotstockFile("2021/01/22/bild3.png"), alt: "Route image on the traverse", caption: "Trail: traverse terrain" },
    { src: commonsFile("Ascenting Schilthorn from the west ridge, 2012 August.jpg"), alt: "Ascenting Schilthorn from the west ridge", caption: "Trail: west ridge ascent" },
    { src: commonsFile("Schlussaufstieg zum Schilthorn.jpg"), alt: "Final ascent to Schilthorn", caption: "Crux: final ascent to Schilthorn" },
    { src: commonsFile("Signpost of Roter Herd in 2012 August.jpg"), alt: "Signpost of Roter Herd", caption: "Trail: route junction on the Schilthorn side" },
    { src: commonsFile("Schilthorn with Bernese Alps, 2012 August.jpg"), alt: "Schilthorn with Bernese Alps", caption: "Trail context: summit massif from the route line" },
    { src: commonsFile("Summit of Schilthorn reveals itself above the clouds in 2012 August.jpg"), alt: "Schilthorn summit above the clouds", caption: "Summit area: final approach atmosphere" }
  ],
  "bernese-day3": [
    { src: commonsFile("Hohtuerli Richtung Oeschinersee.jpg"), alt: "Upper terrain below Hohtuerli toward Oeschinen", caption: "Trail: loose upper terrain on the Oeschinen side of Hohtürli" },
    { src: commonsFile("Wegweiser auf dem Hohtürli.jpg"), alt: "Signpost on Hohtürli", caption: "Trail: signpost at Hohtürli" },
    { src: commonsFile("View from the Hohtürli Pass in the Bernese Alps.jpg"), alt: "View from Hohtürli Pass", caption: "Trail: pass terrain and drop lines" },
    { src: commonsFile("Kiental vom Hohtürli.jpg"), alt: "View toward Kiental from Hohtürli", caption: "Trail: terrain on the Kiental side" },
    { src: commonsFile("Bundstock.jpg"), alt: "Bundstock and surrounding terrain", caption: "Trail: terrain on the traverse day" },
    { src: commonsFile("Blüemlisalphütte in summer 2011.JPG"), alt: "Blüemlisalphütte in summer", caption: "Approach: final terrain near Blüemlisalphütte" },
    { src: commonsFile("Gspaltenhornhütte view (1).jpg"), alt: "View from Gspaltenhornhütte", caption: "Trail context: terrain seen from the second hut" },
    { src: commonsFile("Gspaltenhornhütte view (2).jpg"), alt: "Second view from Gspaltenhornhütte", caption: "Trail context: upper traverse terrain from the hut side" }
  ],
  "bernese-day4": [
    { src: commonsFile("Oeschinen Lake in the Bernese Oberland.jpg"), alt: "Trail above Oeschinen Lake", caption: "Trail: descent toward Oeschinen" },
    { src: commonsFile("20190725 Aufstieg Oeschinensee mit Blüemlisalp, Kandersteg (06452).jpg"), alt: "Path above Oeschinensee", caption: "Trail: upper descent line" },
    { src: commonsFile("20190725 Heuberg und Oeschinensee, Kandersteg (06547).jpg"), alt: "Terrain above Oeschinensee", caption: "Trail: open terrain toward the lake" },
    { src: commonsFile("Wandern bei Oeschinensee in Kandersteg (2015).jpg"), alt: "Hiking near Oeschinensee in Kandersteg", caption: "Trail: footpath and walking terrain above the lake" },
    { src: commonsFile("A view on Oeschinensee and the mountains.jpg"), alt: "Oeschinensee and mountains", caption: "Trail: lower valley-side line" },
    { src: commonsFile("Cliffs above Oeschinen Lake.jpeg"), alt: "Cliffs above Oeschinen Lake", caption: "Trail: cliffside terrain above the lake" },
    { src: commonsFile("Lake Oeschinen in Kandersteg 01.jpg"), alt: "Lake Oeschinen in Kandersteg", caption: "Trail: path and shore terrain near the lake" },
    { src: commonsFile("Oeschinensee 0437.jpg"), alt: "Oeschinensee and surrounding slopes", caption: "Trail context: lower terrain near the valley exit" }
  ],

  "rofan-day1": [
    { src: commonsFile("Maurach from Achenseebahn.jpg"), alt: "Maurach and surrounding terrain", caption: "Trail context: Maurach valley start" },
    { src: commonsFile("Rofangebirge 2.jpg"), alt: "Rofan mountains above Maurach", caption: "Trail: mountain side above the valley" },
    { src: commonsFile("Achensee (Blick von der Erfurter Hütte).jpg"), alt: "Achensee seen from the Erfurter Hütte side", caption: "Trail: rising line above Achensee" },
    { src: commonsFile("Gschöllkopf Richtung Mauritzalm.jpg"), alt: "Trail direction near Gschöllkopf", caption: "Trail: broad path near the upper hut zone" },
    { src: commonsFile("Bergstation der Rofanbahn mit Erfurter Hütte (rechts).jpg"), alt: "Upper Rofanbahn station and Erfurter Hütte", caption: "Trail context: upper arrival zone" },
    { src: commonsFile("Erfurter Hütte 2.JPG"), alt: "Erfurter Hütte second view", caption: "Stop: second hut view" },
    { src: commonsFile("ErfurterH-SO.jpg"), alt: "Erfurter Hütte from the southeast", caption: "Stop: hut and terrace side" },
    { src: commonsFile("Erfurter huette.jpg"), alt: "Erfurter Hütte and surrounding slopes", caption: "Stop: hut with surrounding slopes" }
  ],
  "rofan-day2": [
    { src: commonsFile("Rofangebirge 2.jpg"), alt: "Rofan ridge terrain", caption: "Trail context: moderate limestone terrain" },
    { src: commonsFile("Dalfazer Wände S.JPG"), alt: "Dalfazer Wände terrain", caption: "Trail: terrain on the Bayreuther transfer day" },
    { src: commonsFile("Rofan Hauptgruppe - panoramio.jpg"), alt: "Rofan main group terrain", caption: "Trail: open traverse terrain" },
    { src: commonsFile("Hochiss un Spieljoch NW.JPG"), alt: "Hochiss and Spieljoch from the northwest", caption: "Trail context: next day's summit area" },
    { src: commonsFile("Fahrweg Bayreuther Hütte.jpg"), alt: "Track toward Bayreuther Hütte", caption: "Trail: approach line to Bayreuther Hütte" },
    { src: commonsFile("Bayreuther Hütte.jpg"), alt: "Bayreuther Hütte exterior", caption: "Stop: Bayreuther Hütte" },
    { src: commonsFile("Bayreuther Huette 3.jpg"), alt: "Bayreuther Hütte from another angle", caption: "Stop: second hut view" },
    { src: commonsFile("Seekarspitze, Hochiss und Klobenjoch.jpg"), alt: "Rofan ridge line with Hochiss", caption: "Trail context: ridge line ahead of the summit day" }
  ],
  "rofan-day3": [
    { src: commonsFile("Hochiss.jpg"), alt: "Hochiss summit massif", caption: "Trail context: summit massif from the route side" },
    { src: commonsFile("Hochiss 2011.JPG"), alt: "Hochiss summit area", caption: "Trail: upper summit terrain" },
    { src: commonsFile("Rofan Hauptgruppe - panoramio.jpg"), alt: "Rofan ridge panorama", caption: "Trail: ridge terrain on the summit traverse" },
    { src: commonsFile("5 Gipfel Klettersteig Panorama von der Seekarlspitze alle Gipfel.jpg"), alt: "High Rofan ridge terrain", caption: "Trail context: high ridge terrain" },
    { src: commonsFile("Alpendohle Hochiss DalfazerWände.jpg"), alt: "Hochiss and Dalfazer Wände terrain", caption: "Trail: terrain between the summit and Dalfaz side" },
    { src: commonsFile("Steinernes Tor Nordseite.JPG"), alt: "Steinernes Tor on the Rofan route", caption: "Trail: rocky section near Steinernes Tor" },
    { src: commonsFile("Dalfazalm 2019 2.jpg"), alt: "Dalfaz Alm second view", caption: "Stop: Dalfaz Alm and pasture edge" },
    { src: commonsFile("Dalfazalm von Süden II.jpg"), alt: "Dalfaz Alm from the south", caption: "Stop: second day-end view" }
  ],
  "rofan-day4": [
    { src: commonsFile("Dalfazalm 2019 3.jpg"), alt: "Dalfaz Alm departure side", caption: "Trail: first descent section below Dalfaz Alm" },
    { src: commonsFile("Dalfazalm 2019 4.jpg"), alt: "Dalfaz Alm and nearby terrain", caption: "Trail: lower line below the alm" },
    { src: commonsFile("Dalfazalm von Süden I.jpg"), alt: "Dalfaz Alm from the south", caption: "Trail context: day-end stop from above" },
    { src: commonsFile("Dalfazalm von Süden III.jpg"), alt: "Dalfaz Alm south side", caption: "Trail: descent terrain above Achensee" },
    { src: commonsFile("Achensee-Tirol.jpg"), alt: "Achensee and slopes above Maurach", caption: "Trail: lower descent toward the lake side" },
    { src: commonsFile("Atoll Achensee seen from Maurach.jpg"), alt: "Maurach and Achensee from above", caption: "Trail context: valley exit terrain" },
    { src: commonsFile("Maurach, Austria.jpg"), alt: "Maurach in summer conditions", caption: "Stop: Maurach valley floor" },
    { src: commonsFile("Achensee panorama Maurach.png"), alt: "Maurach and Achensee panorama", caption: "Stop: final valley-exit panorama" }
  ],

  "ratikon-day1": [
    { src: commonsFile("Schesaplana seewis.jpg"), alt: "Schesaplana seen from Seewis side", caption: "Trail: valley approach toward Schesaplana" },
    { src: commonsFile("Parpfienzweg Schesaplana.JPG"), alt: "Parpfienzweg toward Schesaplana", caption: "Trail: Parpfienzweg section" },
    { src: commonsFile("Vordere Parpfienzalpe, Schesaplana.JPG"), alt: "Vordere Parpfienzalpe and Schesaplana", caption: "Trail: alpine pasture section" },
    { src: commonsFile("Schesaplanatour 01.JPG"), alt: "Schesaplana tour start", caption: "Trail: early approach terrain" },
    { src: commonsFile("Schesaplanatour 02.JPG"), alt: "Schesaplana tour trail", caption: "Trail: mid-approach terrain" },
    { src: commonsFile("Schesaplanatour 03.JPG"), alt: "Schesaplana tour path", caption: "Trail: upper approach to the hut area" },
    { src: schesaplanaFile("2021/04/huettepath.jpg"), alt: "Path toward Schesaplanahütte", caption: "Trail: hut access path on the approach" },
    { src: schesaplanaFile("2022/05/0II8461-scaled.jpg"), alt: "Schesaplanahütte approach and surroundings", caption: "Stop: hut approach terrain and setting" }
  ],
  "ratikon-day2": [
    { src: commonsFile("Schesaplanatour 04.JPG"), alt: "Schesaplana summit day trail 1", caption: "Trail: summit day terrain" },
    { src: commonsFile("Schesaplanatour 05.JPG"), alt: "Schesaplana summit day trail 2", caption: "Trail: rocky ascent terrain" },
    { src: commonsFile("Schesaplanatour 06.JPG"), alt: "Schesaplana summit day trail 3", caption: "Trail: upper route line" },
    { src: commonsFile("Schesaplanatour 07.JPG"), alt: "Schesaplana summit day trail 4", caption: "Trail: stony summit terrain" },
    { src: commonsFile("Gesteinsschichtungen am Südanstieg kurz unterm Gipfel.jpg"), alt: "Rock layers on the south ascent below the summit", caption: "Crux: steeper rocky section below the summit" },
    { src: commonsFile("Schesaplana gipfel.jpg"), alt: "Schesaplana summit", caption: "Summit: final top section" },
    { src: commonsFile("Schesaplanatour 11.JPG"), alt: "Schesaplana summit day trail 5", caption: "Trail: broken upper terrain below the summit" },
    { src: commonsFile("Schesaplanatour 12.JPG"), alt: "Schesaplana summit day trail 6", caption: "Trail: steeper line on the summit day" }
  ],
  "ratikon-day3": [
    { src: commonsFile("Prättigauer Höhenweg 02.jpg"), alt: "Prättigauer Höhenweg trail 2", caption: "Trail: route line toward Carschina" },
    { src: commonsFile("Prättigauer Höhenweg 03.jpg"), alt: "Prättigauer Höhenweg trail 3", caption: "Trail: rocky path on the traverse" },
    { src: commonsFile("Prättigauer Höhenweg 04.jpg"), alt: "Prättigauer Höhenweg trail 4", caption: "Trail: traverse terrain" },
    { src: commonsFile("Prättigauer Höhenweg 05.jpg"), alt: "Prättigauer Höhenweg trail 5", caption: "Trail: higher route section" },
    { src: commonsFile("Prättigauer Höhenweg 06.jpg"), alt: "Prättigauer Höhenweg trail 6", caption: "Trail: path line on the ridge side" },
    { src: commonsFile("Prättigauer Höhenweg Cavelljoch.jpg"), alt: "Prättigauer Höhenweg Cavelljoch", caption: "Trail: pass section on the traverse" },
    { src: commonsFile("Prättigauer Höhenweg Schweizertor.JPG"), alt: "Prättigauer Höhenweg Schweizertor section", caption: "Trail: narrow gateway terrain on the traverse" },
    { src: commonsFile("Prättigauer Höhenweg Nr. 72.jpg"), alt: "Prättigauer Höhenweg route 72", caption: "Trail: signed route section toward Carschina" }
  ],
  "ratikon-day4": [
    { src: commonsFile("Prättigauer Höhenweg Salisweg.jpg"), alt: "Prättigauer Höhenweg Salisweg", caption: "Trail: descent via Salisweg" },
    { src: commonsFile("Prättigaure Höhenweg Salisweg 02.jpg"), alt: "Prättigauer Höhenweg Salisweg second view", caption: "Trail: lower Salisweg section" },
    { src: commonsFile("Prättigauer Höhenweg Hochbühel Hintersäss.jpg"), alt: "Prättigauer Höhenweg Hochbühel Hintersäss", caption: "Trail: lower valley-side terrain" },
    { src: commonsFile("Vals (Prättigauer Höhenweg) (48454665051).jpg"), alt: "Prättigauer Höhenweg valley view", caption: "Trail: valley descent terrain" },
    { src: commonsFile("Sulzflue (Prättigauer Höhenweg) (48454831482).jpg"), alt: "Sulzfluh area on the Prättigauer Höhenweg", caption: "Trail: exposed limestone terrain" },
    { src: commonsFile("View from Carschina cabin (Prättigauer Höhenweg) (48454685136).jpg"), alt: "View from Carschina cabin", caption: "Trail: start of the descent from Carschina" },
    { src: commonsFile("Prättigauer Höhenweg 72.jpg"), alt: "Prättigauer Höhenweg route 72 view", caption: "Trail: marked descent route line" },
    { src: commonsFile("Prättigauer Höhenweg (48454807937).jpg"), alt: "Prättigauer Höhenweg additional descent view", caption: "Trail: lower descent terrain toward the valley" }
  ]
};

window.appendExtraDayPhotos = function appendExtraDayPhotos() {
  Object.entries(window.extraDayPhotos).forEach(([key, photos]) => {
    const gallery = document.querySelector(`[data-gallery="${key}"]`);
    if (!gallery) {
      return;
    }

    // Keep the day galleries dense and uniform. If the target tile count changes, update
    // the Playwright assertions in tests/page.spec.mjs in the same edit.
    photos.forEach((photo) => {
      // Gallery tiles still prefer managed thumbs where available. The duplicated-image bug came
      // from the old clone filler, which has been removed from index.html.
      const asset = typeof window.getManagedMediaAsset === "function"
        ? window.getManagedMediaAsset(photo.src)
        : { thumb: photo.src, full: photo.src };
      const figure = document.createElement("figure");
      figure.className = "media";

      const img = document.createElement("img");
      img.src = asset.thumb || asset.full || photo.src;
      img.dataset.fullsrc = asset.full || photo.src;
      img.alt = photo.alt;
      img.loading = "lazy";
      img.decoding = "async";

      const caption = document.createElement("figcaption");
      caption.textContent = photo.caption;

      figure.append(img, caption);
      gallery.append(figure);
    });
  });
};
