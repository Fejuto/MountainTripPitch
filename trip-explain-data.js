(() => {
  // This file holds route-specific explanation metadata and cost assumptions that are verbose
  // enough to obscure the main page script. Keep it aligned with the visible route order,
  // source list labels, and any future changes to cost, paperwork, or decision-factor wording.
  function buildCostCategory(single, options = {}) {
    return {
      single,
      pair: options.pair ?? single * 2,
      breakdown: options.breakdown ?? [],
      sourceHints: options.sourceHints ?? [],
      meaning: options.meaning ?? "",
      note: options.note ?? ""
    };
  }

  window.tripExplainData = {
    routeSourceMatchers: [
      { routeId: "karwendel", patterns: ["bettelwurf", "karwendel", "pfeis", "nordkette", "absam", "halltal", "speckkar"] },
      { routeId: "stubai", patterns: ["stubai", "habicht", "innsbrucker-huette", "innsbrucker h\u00fctte", "innsbrucker huette", "bremer-huette", "bremer h\u00fctte", "bremer huette", "neder", "gschnitz"] },
      { routeId: "dolomites", patterns: ["vallandro", "biella", "duerrenstein", "d\u00fcrrenstein", "plaetzwiese", "prato piazza", "prags", "braies", "villabassa", "niederdorf", "suedtirolmobil", "443_"] },
      { routeId: "rofan", patterns: ["rofan", "achensee", "erfurter", "bayreuther", "dalfaz", "maurach", "hochiss"] },
      { routeId: "ratikon", patterns: ["schesaplana", "carschina", "graubunden", "graub\u00fcnden", "seewis", "st. ant", "st ant", "sankt-ant", "sankt ant", "kueblis", "k\u00fcblis", "landquart", "z\u00fcrich", "zurich"] },
      { routeId: "bernese", patterns: ["rotstock", "gspaltenhorn", "schilthorn", "blueemlisalp", "bl\u00fcemlisalp", "bluemlisalp", "muerren", "m\u00fcrren", "oeschinen", "lauterbrunnen", "kandersteg"] }
    ],
    paperworkMeta: {
      karwendel: {
        headline: "No permit; reserve 3 hut nights",
        summary: "Dutch passport or ID card basis. EHIC helps for state care. Add rescue / repatriation cover for the summit and ridge days.",
        breakdown: [
          "Paperwork basis used on this page: a Dutch traveler starting from Rotterdam. Other nationalities can have different entry rules.",
          "Inference from the official route and hut pages checked for this page: no route permit or mandatory trail registration was found for the intended dry-summer line.",
          "Austria short-stay basis used here: valid Dutch passport or Dutch ID card.",
          "EHIC can be requested free from your Dutch health insurer and helps for medically necessary state care.",
          "Dutch travel advice for Austria says mountain sports can involve extra insurance conditions or premiums. This route is still exposed mountain hiking, especially on the Speckkarspitze day and the Goetheweg exit, so rescue / repatriation cover is the cleaner assumption even though no via ferrata set is part of the intended line.",
          "Book Nights 1 and 2 at Bettelwurfh\u00fctte and Night 3 at Pfeish\u00fctte through the official hut pages before travel.",
          "Separate permit / registration cost used on this page: EUR0. No separate hut-booking fee was found on the checked pages; the normal hut stay itself is covered in the cost section."
        ],
        sourceHints: [
          "Netherlands Worldwide Austria travel advice",
          "Dutch government travel-document page",
          "Dutch government EHIC page",
          "Bettelwurfh\u00fctte official site",
          "Pfeish\u00fctte official site",
          "Karwendel H\u00f6henweg stage 5"
        ]
      },
      stubai: {
        headline: "No permit; reserve 3 hut nights",
        summary: "Dutch passport or ID card basis. EHIC helps for state care. Add rescue / repatriation cover for Habicht and the high hut transfer.",
        breakdown: [
          "Paperwork basis used on this page: a Dutch traveler starting from Rotterdam. Other nationalities can have different entry rules.",
          "Inference from the official route and hut pages checked for this page: no route permit or mandatory trail registration was found for the intended dry-summer line.",
          "Austria short-stay basis used here: valid Dutch passport or Dutch ID card.",
          "EHIC can be requested free from your Dutch health insurer and helps for medically necessary state care.",
          "Dutch travel advice for Austria says mountain sports can involve extra insurance conditions or premiums. For this route that matters most on Habicht and the Innsbrucker H\u00fctte to Bremer H\u00fctte transfer day.",
          "Book Nights 1 and 2 at Innsbrucker H\u00fctte and Night 3 at Bremer H\u00fctte through the official hut pages before travel.",
          "Separate permit / registration cost used on this page: EUR0. No separate hut-booking fee was found on the checked pages; the normal hut stay itself is covered in the cost section."
        ],
        sourceHints: [
          "Netherlands Worldwide Austria travel advice",
          "Dutch government travel-document page",
          "Dutch government EHIC page",
          "Innsbrucker H\u00fctte hut rules",
          "Innsbrucker H\u00fctte prices",
          "Bremer H\u00fctte prices"
        ]
      },
      dolomites: {
        headline: "No permit; reserve huts; Biella deposit",
        summary: "Dutch passport or ID card basis. EHIC helps for state care. No route permit found. Biella asks a 50% deposit.",
        breakdown: [
          "Paperwork basis used on this page: a Dutch traveler starting from Rotterdam. Other nationalities can have different entry rules.",
          "Inference from the official route and hut pages checked for this page: no route permit or mandatory trail registration was found for the intended dry-summer line.",
          "Italy short-stay basis used here: valid Dutch passport or Dutch ID card.",
          "EHIC can be requested free from your Dutch health insurer and helps for medically necessary state care.",
          "Reserve Nights 1 and 2 at Rifugio Vallandro and Night 3 at Rifugio Biella through the official hut pages before travel.",
          "Rifugio Biella publishes a 50% deposit requirement on its booking material. The route uses no separate permit or registration fee beyond the normal hut stay.",
          "Separate permit / registration cost used on this page: EUR0. EHIC cost: EUR0."
        ],
        sourceHints: [
          "Netherlands Worldwide Italy travel advice",
          "Dutch government travel-document page",
          "Dutch government EHIC page",
          "Rifugio Vallandro official site",
          "Rifugio Biella official site"
        ]
      },
      rofan: {
        headline: "No permit; reserve 3 hut nights",
        summary: "Dutch passport or ID card basis. EHIC helps for state care. Extra rescue / repatriation cover is sensible but not mandatory.",
        breakdown: [
          "Paperwork basis used on this page: a Dutch traveler starting from Rotterdam. Other nationalities can have different entry rules.",
          "Inference from the official route and hut pages checked for this page: no route permit or mandatory trail registration was found for the intended dry-summer line.",
          "Austria short-stay basis used here: valid Dutch passport or Dutch ID card.",
          "EHIC can be requested free from your Dutch health insurer and helps for medically necessary state care.",
          "Dutch travel advice for Austria says mountain sports can involve extra insurance conditions or premiums. This route is the mildest Austrian option here, but a rescue / repatriation add-on is still the cleaner assumption.",
          "Book Night 1 at Erfurter H\u00fctte, Night 2 at Bayreuther H\u00fctte, and Night 3 at Dalfaz Alm through the official accommodation pages before travel.",
          "Separate permit / registration cost used on this page: EUR0. No separate hut-booking fee was found on the checked pages; the normal hut stay itself is covered in the cost section."
        ],
        sourceHints: [
          "Netherlands Worldwide Austria travel advice",
          "Dutch government travel-document page",
          "Dutch government EHIC page",
          "Erfurter H\u00fctte official site",
          "Bayreuther H\u00fctte official site",
          "Dalfaz Alm official site"
        ]
      },
      ratikon: {
        headline: "No permit; reserve huts; Swiss rescue caveat",
        summary: "Dutch passport or ID card basis. EHIC helps for state care. Swiss rescue / evacuation can still be your cost.",
        breakdown: [
          "Paperwork basis used on this page: a Dutch traveler starting from Rotterdam. Other nationalities can have different entry rules.",
          "Inference from the official route and hut pages checked for this page: no route permit or mandatory trail registration was found for the intended dry-summer line.",
          "Switzerland short-stay basis used here: valid Dutch passport or Dutch ID card.",
          "EHIC can be requested free from your Dutch health insurer and helps for medically necessary state care, but it is not the same as rescue or repatriation cover.",
          "Dutch travel advice for Switzerland says mountain rescue or evacuation can still become your own cost. That makes extra rescue / repatriation cover the clean assumption for this route.",
          "Book Nights 1 and 2 at Schesaplanah\u00fctte and Night 3 at Carschinah\u00fctte before travel through the official hut pages used on this page.",
          "Separate permit / registration cost used on this page: CHF0 / EUR0. No separate route-registration fee was found; the normal hut stay itself is covered in the cost section."
        ],
        sourceHints: [
          "Netherlands Worldwide Switzerland travel advice",
          "Dutch government travel-document page",
          "Dutch government EHIC page",
          "Schesaplanah\u00fctte official site",
          "Graub\u00fcnden Carschinah\u00fctte page"
        ]
      },
      bernese: {
        headline: "No permit; reserve huts; Swiss rescue caveat",
        summary: "Dutch passport or ID card basis. EHIC helps for state care. Swiss rescue / evacuation can still be your cost.",
        breakdown: [
          "Paperwork basis used on this page: a Dutch traveler starting from Rotterdam. Other nationalities can have different entry rules.",
          "Inference from the official route and hut pages checked for this page: no route permit or mandatory trail registration was found for the intended dry-summer line.",
          "Switzerland short-stay basis used here: valid Dutch passport or Dutch ID card.",
          "EHIC can be requested free from your Dutch health insurer and helps for medically necessary state care, but it is not the same as rescue or repatriation cover.",
          "Dutch travel advice for Switzerland says mountain rescue or evacuation can still become your own cost. On this page that matters especially on the Schilthorn, Sefinafurgga, and Hoht\u00fcrli parts of the route.",
          "Book Night 1 at Rotstockh\u00fctte, Night 2 at Gspaltenhornh\u00fctte, and Night 3 at Bl\u00fcemlisalph\u00fctte through the official hut pages before travel.",
          "Separate permit / registration cost used on this page: CHF0 / EUR0. No separate route-registration fee was found; the normal hut stay itself is covered in the cost section."
        ],
        sourceHints: [
          "Netherlands Worldwide Switzerland travel advice",
          "Dutch government travel-document page",
          "Dutch government EHIC page",
          "Rotstockh\u00fctte AGB",
          "Gspaltenhornh\u00fctte official site",
          "Bl\u00fcemlisalph\u00fctte AGB"
        ]
      }
    },
    comparisonMeta: {
      karwendel: {
        sourceHints: {
          transport: ["Transavia official booking site", "Innsbruck Airport to Absam timing", "Nordkette tariffs"],
          technical: ["Bettelwurfh\u00fctte official site", "Pfeish\u00fctte official site", "Karwendel H\u00f6henweg stage 5"],
          planning: ["Bettelwurfh\u00fctte official site", "Pfeish\u00fctte official site", "Karwendel H\u00f6henweg stage 5"],
          cost: ["Transavia official booking site", "Bettelwurfh\u00fctte prices", "Pfeish\u00fctte meal prices", "Nordkette tariffs"]
        },
        decisionExplain: {
          technical: "Medium because the Bettelwurfh\u00fctte-based Speckkarspitze line stays within normal dry-summer mountain hiking rather than a via ferrata setup, but it still includes steeper rocky summit terrain and the exposed Goetheweg exit. On this page it sits above Dolomites and Rofan, but below Stubai, R\u00e4tikon, and Bernese Oberland.",
          weather: "High because both the Speckkarspitze summit day and the Goetheweg exit are materially less forgiving in wind, wet rock, or lingering snow. The route note still treats poor conditions as a reason to reject the summit or exit day.",
          navigation: "Moderate because the huts anchor the route clearly, but the traverse and ridge exit still require attention in broken limestone terrain. It is not as straightforward as Dolomites or Rofan, but it is not the most route-finding-heavy line on the page either.",
          bailouts: "Moderate because Bettelwurfh\u00fctte and Pfeish\u00fctte provide strong staging points, but once high on the traverse or Goetheweg there are fewer simple same-day valley exits than on Dolomites or Rofan.",
          booking: "Stable because this page does not carry any reopening or operational caveat for the Karwendel huts. Compared with Dolomites and R\u00e4tikon, there is less booking uncertainty in the route notes."
        }
      },
      stubai: {
        sourceHints: {
          transport: ["Transavia official booking site", "Innsbruck Airport to Neder timing"],
          technical: ["Habicht route page", "Stubai Seven Summits Habicht page", "Bremer H\u00fctte access page"],
          planning: ["Habicht route page", "Stubai Seven Summits Habicht page", "Stubai High Trail overview"],
          cost: ["Transavia official booking site", "Innsbrucker H\u00fctte prices", "Bremer H\u00fctte prices", "Innsbruck Airport to Neder timing"]
        },
        decisionExplain: {
          technical: "Higher because Habicht and the Innsbrucker H\u00fctte to Bremer H\u00fctte transfer both push this route into the more serious hiking half of the page. Relative to the six options it belongs with Karwendel, R\u00e4tikon, and Bernese Oberland rather than with Dolomites or Rofan.",
          weather: "High because Habicht and the high transfer day both need stable conditions and a clear snow situation. The route loses much of its margin if cloud build-up or afternoon storms are likely.",
          navigation: "Moderate because the summit day and the hut-to-hut crossing are substantial mountain stages rather than a single obvious valley path. It is a clear route on paper, yet it still needs more attention than Rofan or Dolomites.",
          bailouts: "Moderate because the route starts and ends on accessible valleys, but the core summit and transfer days are committed once you leave the huts. It is more forgiving than Bernese Oberland, but not an especially bailout-rich route.",
          booking: "Stable because the huts themselves do not carry a route-specific reopening warning on this page. The main caution is weather, not hut availability."
        }
      },
      dolomites: {
        sourceHints: {
          transport: ["Transavia official booking site", "Prato Piazza access page", "Line 443 timetable (2026)", "Innsbruck Airport to Villabassa timing"],
          technical: ["D\u00fcrrenstein route note", "Rifugio Vallandro official site", "Rifugio Biella official site"],
          planning: ["Rifugio Biella official site", "Prato Piazza access page", "Lago di Braies access page"],
          cost: ["Transavia official booking site", "Rifugio Vallandro official site", "Rifugio Biella official site", "Prato Piazza access page", "Line 443 timetable (2026)"]
        },
        decisionExplain: {
          technical: "Medium because this is still mountain hiking, but the page treats it as one of the lighter technical options: mainly T3 with only a short aided step near D\u00fcrrenstein. Relative to the six routes it sits below Karwendel, Stubai, R\u00e4tikon, and Bernese Oberland.",
          weather: "Medium because D\u00fcrrenstein is still exposed enough to care about wind and remaining snow, but the route structure is more forgiving than the bigger Swiss and Tyrolean summit days. It is not as conditions-sensitive as Karwendel, Stubai, or Bernese Oberland.",
          navigation: "Easier because the plateau access, Vallandro base, and Braies exit keep the route line cleaner than most of the page. Among the six options it is one of the simpler routes to read and follow.",
          bailouts: "Stronger because the route stays relatively close to road access and known tourist infrastructure compared with the deeper hut-to-hut lines. If you need to shorten or cut the plan, the exit options are clearer than on Bernese Oberland or Stubai.",
          booking: "Check Biella because the page still carries a direct note that Rifugio Biella's next opening window should be confirmed before booking. That makes the route less certain on the lodging side than Karwendel, Stubai, or Rofan."
        }
      },
      rofan: {
        sourceHints: {
          transport: ["Transavia official booking site", "Achensee public transport access", "Innsbruck Airport to Maurach timing"],
          technical: ["Achensee Rofan long-distance hike overview", "Rofan hike stage 2", "Rofan hike stage 3"],
          planning: ["Achensee Rofan long-distance hike overview", "Achensee public transport access", "Rofan hike stage 4"],
          cost: ["Transavia official booking site", "Erfurter H\u00fctte official site", "Bayreuther H\u00fctte official site", "Dalfaz Alm official site", "Achensee public transport access"]
        },
        decisionExplain: {
          technical: "Lower because the page treats Rofan as the mildest technical line after the Dolomites option: mainly T2 to T3, with steel-cable sections where a via ferrata set is optional rather than required. Relative to the six routes it is the easiest technical option overall.",
          weather: "Medium because the terrain is still alpine and the long summit day needs decent conditions, but the route is less exposed and less consequential than Karwendel, Stubai, R\u00e4tikon, or Bernese Oberland.",
          navigation: "Easier because the Rofan stage structure is comparatively clear and the route stays close to a well-developed hiking area. On this page it is one of the cleanest options to follow without complicated route-finding.",
          bailouts: "Stronger because both Maurach and the Achensee side infrastructure keep the route close to practical exits. Compared with Bernese Oberland or R\u00e4tikon, the route is easier to shorten without a major rescue of the itinerary.",
          booking: "Stable because the route does not currently depend on a reopening caveat or a disputed hut season. The page's main caution is simply that Day 3 is long."
        }
      },
      ratikon: {
        sourceHints: {
          transport: ["NS International official site", "Zurich to Seewis Dorf timing", "St. Ant\u00f6nien public transport note", "Zurich Airport to St. Ant\u00f6nien timing"],
          technical: ["SAC Schesaplanah\u00fctte route portal", "Schesaplanah\u00fctte official site", "Graub\u00fcnden Carschinah\u00fctte page"],
          planning: ["Graub\u00fcnden Carschinah\u00fctte page", "Schesaplana round tour access notes", "Schesaplanah\u00fctte official site"],
          cost: ["NS International official site", "Schesaplanah\u00fctte official site", "Graub\u00fcnden Carschinah\u00fctte page", "St. Ant\u00f6nien public transport note"]
        },
        decisionExplain: {
          technical: "Higher because Schesaplana and the Gamsluggen-side terrain push the route into the upper technical band used on this page. It is a serious dry-summer hiking line, grouped more naturally with Stubai, Karwendel, and Bernese Oberland than with Dolomites or Rofan.",
          weather: "High because both the summit day and the long traverse day lose margin quickly if there is lingering snow, wet rock, or poor visibility. The route note explicitly says that snow at Gamsluggen should change the plan.",
          navigation: "Moderate because the route is established but still long and rocky enough that the line is not as self-evident as Dolomites or Rofan. It is not the hardest route-finding challenge on the page, but it is clearly beyond the easiest tier.",
          bailouts: "Moderate because the huts anchor the structure, but the route still commits you to longer mountain sections before the next practical exit. It sits between the stronger bailout routes and the weaker Swiss high routes.",
          booking: "Check Carschina because the route still depends on Carschinah\u00fctte reopening confirmation. That keeps its booking certainty weaker than the otherwise comparable Austrian routes."
        }
      },
      bernese: {
        sourceHints: {
          transport: ["NS International official site", "M\u00fcrren arrival page", "Rotterdam to Lauterbrunnen timing", "Rotterdam to Kandersteg rail timing", "Oeschinensee gondola and access site"],
          technical: ["SAC Schilthorn route portal", "SAC route portal for the Bl\u00fcemlisalp area", "Rotstockh\u00fctte official site", "Gspaltenhornh\u00fctte official site"],
          planning: ["Gspaltenhornh\u00fctte official site", "Bl\u00fcemlisalph\u00fctte official site", "SAC route portal for the Bl\u00fcemlisalp area"],
          cost: ["NS International official site", "Rotstockh\u00fctte official site", "Gspaltenhornh\u00fctte official site", "Bl\u00fcemlisalph\u00fctte official site", "Oeschinensee gondola and access site", "M\u00fcrren arrival page"]
        },
        decisionExplain: {
          technical: "Higher because this line combines Schilthorn and the Hoht\u00fcrli side of the Bl\u00fcemlisalp approach, with cables, steps, and sustained steep mountain terrain. It clearly belongs in the upper technical band on this six-route page.",
          weather: "Very high because the Swiss high stages here are the least forgiving combination of exposure, pass terrain, and hut-to-hut commitment on the page. Relative to the other routes this is the one most affected by poor weather and residual snow.",
          navigation: "Moderate because the route is a classic SAC line rather than an obscure traverse, but the terrain still asks for more concentration than Rofan or Dolomites. Good route information exists, yet the commitment level remains high.",
          bailouts: "Weaker because once the route is on the high Swiss stages, simple same-day exits are not as strong as on the valley-near options. Among the six routes, this is one of the least forgiving if you need to shorten mid-route.",
          booking: "Stable because there is no specific reopening or uncertain-season warning on the huts used here. The caution on this route is conditions, not current booking reliability."
        }
      }
    },
    costRoutes: [
      {
        id: "karwendel",
        label: "Karwendel",
        pairAssumption: "2 adults assumes two standard adult hut places and two adult tickets. No route-specific private-room discount is assumed unless it was clearly comparable across the route.",
        categories: {
          publicTransport: buildCostCategory(100, {
            meaning: "Return travel between Rotterdam and the Day 1 / Day 4 access points.",
            breakdown: [
              "Rounded budget direct Rotterdam - Innsbruck return fare on the favorable hiking-season departure used on this page.",
              "Local airport and valley buses between Innsbruck, Absam / Halltal, and the Nordkette exit."
            ],
            sourceHints: ["Transavia official booking site", "Innsbruck Airport to Absam timing"]
          }),
          cableCars: buildCostCategory(34, {
            meaning: "Mountain-lift spend needed inside the route rather than on the long-distance journey.",
            breakdown: ["Nordkette descent from Hafelekar at the Day 4 ridge exit."],
            sourceHints: ["Nordkette tariffs"]
          }),
          hutAccommodation: buildCostCategory(86, {
            meaning: "Three overnight stays on the 4-day route.",
            breakdown: ["Night 1: Bettelwurfh\u00fctte.", "Night 2: Bettelwurfh\u00fctte again after the summit loop.", "Night 3: Pfeish\u00fctte after the traverse day."],
            sourceHints: ["Bettelwurfh\u00fctte prices", "Pfeish\u00fctte official site"],
            note: "This page keeps the basis on standard adult hut places, not on private rooms."
          }),
          hutWater: buildCostCategory(16, {
            meaning: "Bought drinking water at huts where carrying the full next day from the valley is unrealistic.",
            breakdown: ["Two Bettelwurfh\u00fctte refills and one Pfeish\u00fctte refill are carried in this planning figure."],
            sourceHints: ["Bettelwurfh\u00fctte prices", "Pfeish\u00fctte meal prices"]
          }),
          hutDinnerBreakfast: buildCostCategory(128, {
            meaning: "Three hut dinners and three breakfasts.",
            breakdown: ["Two Bettelwurfh\u00fctte dinner-plus-breakfast sets.", "One Pfeish\u00fctte dinner-plus-breakfast set.", "Where pages publish bundles more clearly than separate rates, this page keeps the split approximate."],
            sourceHints: ["Bettelwurfh\u00fctte prices", "Pfeish\u00fctte meal prices"]
          }),
          hutTrailFood: buildCostCategory(35, {
            meaning: "Trail food bought from huts or before the route where carrying everything from Rotterdam is not the intended assumption.",
            breakdown: ["Lunch-pack and snack spend for the summit, traverse, and ridge-exit days."],
            sourceHints: ["Pfeish\u00fctte meal prices", "Bettelwurfh\u00fctte prices"]
          }),
          localFees: buildCostCategory(0, {
            meaning: "Extra route-local fees that are not already covered elsewhere.",
            breakdown: ["No separate local taxes or hut fees are added beyond the categories above."],
            sourceHints: ["Bettelwurfh\u00fctte prices"]
          })
        },
        note: "Basis: budget flight-plus-local-bus access, standard adult hut places, and 3 hut nights. The pair figure keeps the same assumptions and simply scales to two adults."
      },
      {
        id: "stubai",
        label: "Stubai",
        pairAssumption: "2 adults assumes two standard adult hut places and two adult tickets. No route-specific private-room discount is assumed unless it was clearly comparable across the route.",
        categories: {
          publicTransport: buildCostCategory(108, {
            meaning: "Return travel between Rotterdam and the Stubai valley start / finish.",
            breakdown: ["Rounded budget direct Rotterdam - Innsbruck return fare on the favorable hiking-season departure used on this page.", "Airport bus plus Stubaital valley bus access to Neder and back from Gschnitz."],
            sourceHints: ["Transavia official booking site", "Innsbruck Airport to Neder timing"]
          }),
          cableCars: buildCostCategory(0, {
            meaning: "Mountain-lift spend needed inside the route rather than on the long-distance journey.",
            breakdown: ["No lift is part of the intended hiking version of this route."],
            sourceHints: ["Stubai High Trail overview"]
          }),
          hutAccommodation: buildCostCategory(78, {
            meaning: "Three overnight stays on the 4-day route.",
            breakdown: ["Night 1: Innsbrucker H\u00fctte.", "Night 2: Innsbrucker H\u00fctte again after Habicht.", "Night 3: Bremer H\u00fctte after the transfer day."],
            sourceHints: ["Innsbrucker H\u00fctte prices", "Bremer H\u00fctte prices"]
          }),
          hutWater: buildCostCategory(10, {
            meaning: "Bought water beyond what is carried from the valleys.",
            breakdown: ["Two refills at Innsbrucker H\u00fctte and one at Bremer H\u00fctte are assumed."],
            sourceHints: ["Innsbrucker H\u00fctte prices", "Bremer H\u00fctte prices"]
          }),
          hutDinnerBreakfast: buildCostCategory(120, {
            meaning: "Three hut dinners and three breakfasts.",
            breakdown: ["Two Innsbrucker H\u00fctte dinner-plus-breakfast sets.", "One Bremer H\u00fctte dinner-plus-breakfast set.", "Where Innsbrucker H\u00fctte pages show breakfast and lunch pack prices more clearly than a half-board split, the dinner share remains approximate."],
            sourceHints: ["Innsbrucker H\u00fctte prices", "Bremer H\u00fctte prices"]
          }),
          hutTrailFood: buildCostCategory(30, {
            meaning: "Trail food bought around the huts for the two harder days.",
            breakdown: ["Lunch-pack and snack spend across the summit and transfer days."],
            sourceHints: ["Innsbrucker H\u00fctte prices", "Bremer H\u00fctte prices"]
          }),
          localFees: buildCostCategory(0, {
            meaning: "Extra route-local fees that are not already covered elsewhere.",
            breakdown: ["No separate local taxes or hut fees are added beyond the categories above."],
            sourceHints: ["Innsbrucker H\u00fctte prices"]
          })
        },
        note: "Basis: budget flight-plus-bus access, standard adult hut places, and 3 hut nights. Pair figures scale from the same assumption set."
      },
      {
        id: "dolomites",
        label: "Dolomites",
        pairAssumption: "2 adults assumes two standard adult hut places and two adult tickets. No route-specific private-room discount is assumed unless it was clearly comparable across the route.",
        categories: {
          publicTransport: buildCostCategory(155, {
            meaning: "Return travel between Rotterdam and the plateau / Braies access points.",
            breakdown: ["Rounded budget Rotterdam - Innsbruck return fare on the favorable hiking-season departure used on this page.", "Onward South Tyrol rail and bus access to Niederdorf / Villabassa and the Prato Piazza side, plus the Day 4 Braies side return connection."],
            sourceHints: ["Transavia official booking site", "Prato Piazza access page", "Line 443 timetable (2026)", "Innsbruck Airport to Villabassa timing"]
          }),
          cableCars: buildCostCategory(0, {
            meaning: "Mountain-lift spend needed inside the route rather than on the long-distance journey.",
            breakdown: ["No cable car is part of the intended hiking version of this Dolomites route."],
            sourceHints: ["Prato Piazza access page"]
          }),
          hutAccommodation: buildCostCategory(151, {
            meaning: "Three overnight stays on the 4-day route.",
            breakdown: ["Night 1: Rifugio Vallandro.", "Night 2: Rifugio Vallandro again after D\u00fcrrenstein.", "Night 3: Rifugio Biella."],
            sourceHints: ["Rifugio Vallandro official site", "Rifugio Biella official site"],
            note: "Vallandro's dorm-style pricing is clearer than Biella's overnight-only split, so the Biella share remains approximate."
          }),
          hutWater: buildCostCategory(12, {
            meaning: "Bought drinking water on hut-based days.",
            breakdown: ["Two Vallandro refills and one Biella refill are assumed."],
            sourceHints: ["Rifugio Vallandro official site", "Rifugio Biella official site"]
          }),
          hutDinnerBreakfast: buildCostCategory(89, {
            meaning: "Three hut dinners and three breakfasts.",
            breakdown: ["Two Vallandro dinner-plus-breakfast sets.", "One Biella dinner-plus-breakfast share, with the split inferred from the published half-board material."],
            sourceHints: ["Rifugio Vallandro official site", "Rifugio Biella official site"]
          }),
          hutTrailFood: buildCostCategory(30, {
            meaning: "Trail food bought around the huts for summit and transfer days.",
            breakdown: ["Lunch-pack and snack spend across the D\u00fcrrenstein day and the Vallandro - Biella transfer."],
            sourceHints: ["Rifugio Vallandro official site", "Rifugio Biella official site"]
          }),
          localFees: buildCostCategory(0, {
            meaning: "Extra route-local fees that are not already covered elsewhere.",
            breakdown: ["No separate local taxes or hut fees are added beyond the categories above."],
            sourceHints: ["Rifugio Vallandro official site"]
          })
        },
        note: "Basis: budget flight-plus-rail/bus access, standard adult hut places, and 3 hut nights. Pair figures scale from the same assumption set."
      },
      {
        id: "rofan",
        label: "Rofan",
        pairAssumption: "2 adults assumes two standard adult hut places and two adult tickets. No route-specific private-room discount is assumed unless it was clearly comparable across the route.",
        categories: {
          publicTransport: buildCostCategory(108, {
            meaning: "Return travel between Rotterdam and the Maurach trailhead / exit.",
            breakdown: ["Rounded budget direct Rotterdam - Innsbruck return fare on the favorable hiking-season departure used on this page.", "Airport bus, train or bus to Jenbach, and regional transport to Maurach."],
            sourceHints: ["Transavia official booking site", "Achensee public transport access", "Innsbruck Airport to Maurach timing"]
          }),
          cableCars: buildCostCategory(0, {
            meaning: "Mountain-lift spend needed inside the route rather than on the long-distance journey.",
            breakdown: ["No lift is counted because the intended version hikes up from Maurach and back down to Maurach."],
            sourceHints: ["Achensee public transport access"]
          }),
          hutAccommodation: buildCostCategory(90, {
            meaning: "Three overnight stays on the 4-day route.",
            breakdown: ["Night 1: Erfurter H\u00fctte.", "Night 2: Bayreuther H\u00fctte.", "Night 3: Dalfaz Alm."],
            sourceHints: ["Erfurter H\u00fctte official site", "Bayreuther H\u00fctte official site", "Dalfaz Alm official site"]
          }),
          hutWater: buildCostCategory(12, {
            meaning: "Bought drinking water on the hut stages.",
            breakdown: ["One refill each at Erfurter H\u00fctte, Bayreuther H\u00fctte, and Dalfaz Alm is assumed."],
            sourceHints: ["Erfurter H\u00fctte official site", "Bayreuther H\u00fctte official site", "Dalfaz Alm official site"]
          }),
          hutDinnerBreakfast: buildCostCategory(99, {
            meaning: "Three hut dinners and three breakfasts.",
            breakdown: ["One Erfurter H\u00fctte dinner-plus-breakfast set.", "One Bayreuther H\u00fctte dinner-plus-breakfast set.", "One Dalfaz Alm dinner-plus-breakfast set.", "Where the public pages show breakfast and rooms more clearly than full half-board, the dinner share remains approximate."],
            sourceHints: ["Erfurter H\u00fctte official site", "Bayreuther H\u00fctte official site", "Dalfaz Alm official site"]
          }),
          hutTrailFood: buildCostCategory(30, {
            meaning: "Trail food bought around the huts for the summit and transfer days.",
            breakdown: ["Lunch-pack and snack spend for the Bayreuther transfer and the Hochiss traverse."],
            sourceHints: ["Bayreuther H\u00fctte official site", "Dalfaz Alm official site"]
          }),
          localFees: buildCostCategory(0, {
            meaning: "Extra route-local fees that are not already covered elsewhere.",
            breakdown: ["No separate local taxes or hut fees are added beyond the categories above."],
            sourceHints: ["Erfurter H\u00fctte official site"]
          })
        },
        note: "Basis: budget flight-plus-regional-bus access, standard adult hut places, and 3 hut nights. Pair figures scale from the same assumption set."
      },
      {
        id: "ratikon",
        label: "R\u00e4tikon",
        pairAssumption: "2 adults assumes two standard adult hut places and two adult tickets. No route-specific private-room discount is assumed unless it was clearly comparable across the route.",
        categories: {
          publicTransport: buildCostCategory(160, {
            meaning: "Return rail and bus access between Rotterdam and the Seewis / St. Ant\u00f6nien ends of the route.",
            breakdown: ["Rounded budget Rotterdam - Zurich return fare booked early in the favorable hiking window.", "Swiss regional rail and PostAuto access to Seewis on the way in and from St. Ant\u00f6nien on the way out."],
            sourceHints: ["NS International official site", "Zurich to Seewis Dorf timing", "St. Ant\u00f6nien public transport note", "Zurich Airport to St. Ant\u00f6nien timing"]
          }),
          cableCars: buildCostCategory(0, {
            meaning: "Mountain-lift spend needed inside the route rather than on the long-distance journey.",
            breakdown: ["No cable car is part of the intended hiking version of this route."],
            sourceHints: ["Schesaplana round tour access notes"]
          }),
          hutAccommodation: buildCostCategory(148, {
            meaning: "Three overnight stays on the 4-day route.",
            breakdown: ["Night 1: Schesaplanah\u00fctte.", "Night 2: Schesaplanah\u00fctte again after the summit loop.", "Night 3: Carschinah\u00fctte."],
            sourceHints: ["Schesaplanah\u00fctte official site", "Graub\u00fcnden Carschinah\u00fctte page"],
            note: "Schesaplanah\u00fctte publishes clearer individual rates than Carschinah\u00fctte, so the Carschinah\u00fctte share remains approximate."
          }),
          hutWater: buildCostCategory(6, {
            meaning: "Bought drinking water on the hut-based days.",
            breakdown: ["A light bought-water allowance is carried because this route relies more on hut refills than on paid bottled water."],
            sourceHints: ["Schesaplanah\u00fctte official site", "Graub\u00fcnden Carschinah\u00fctte page"]
          }),
          hutDinnerBreakfast: buildCostCategory(137, {
            meaning: "Three hut dinners and three breakfasts.",
            breakdown: ["Two Schesaplanah\u00fctte dinner-plus-breakfast sets.", "One Carschinah\u00fctte dinner-plus-breakfast share inferred from published half-board material."],
            sourceHints: ["Schesaplanah\u00fctte official site", "Graub\u00fcnden Carschinah\u00fctte page"]
          }),
          hutTrailFood: buildCostCategory(36, {
            meaning: "Trail food bought around the huts for the summit and traverse days.",
            breakdown: ["Lunch-pack and snack spend across the summit day and the Carschina traverse day."],
            sourceHints: ["Schesaplanah\u00fctte official site", "Graub\u00fcnden Carschinah\u00fctte page"]
          }),
          localFees: buildCostCategory(0, {
            meaning: "Extra route-local fees that are not already covered elsewhere.",
            breakdown: ["No separate local taxes or hut fees are added beyond the categories above."],
            sourceHints: ["Graub\u00fcnden Carschinah\u00fctte page"]
          })
        },
        note: "Basis: budget early-booked rail-plus-PostAuto access, standard adult hut places, and 3 hut nights. Pair figures scale from the same assumption set."
      },
      {
        id: "bernese",
        label: "Bernese Oberland",
        pairAssumption: "2 adults assumes two standard adult hut places and two adult tickets. No route-specific private-room discount is assumed unless it was clearly comparable across the route.",
        categories: {
          publicTransport: buildCostCategory(126, {
            meaning: "Return rail travel between Rotterdam and the Lauterbrunnen / Kandersteg rail corridor.",
            breakdown: ["Rounded early-booked Rotterdam - Bern / Interlaken - Kandersteg rail spend for the favorable hiking-season window.", "The mountain-access chain is separated below under cable cars and lifts."],
            sourceHints: ["NS International official site", "Rotterdam to Lauterbrunnen timing", "Rotterdam to Kandersteg rail timing"]
          }),
          cableCars: buildCostCategory(50, {
            meaning: "Mountain-access and mountain-exit lifts used inside the route structure.",
            breakdown: ["Lauterbrunnen - Gr\u00fctschalp - M\u00fcrren access chain on Day 1.", "Oeschinensee gondola on the exit side after the Bl\u00fcemlisalph\u00fctte descent."],
            sourceHints: ["M\u00fcrren arrival page", "Oeschinensee gondola and access site"]
          }),
          hutAccommodation: buildCostCategory(121, {
            meaning: "Three overnight stays on the 4-day route.",
            breakdown: ["Night 1: Rotstockh\u00fctte.", "Night 2: Gspaltenhornh\u00fctte.", "Night 3: Bl\u00fcemlisalph\u00fctte."],
            sourceHints: ["Rotstockh\u00fctte official site", "Gspaltenhornh\u00fctte official site", "Bl\u00fcemlisalph\u00fctte official site"],
            note: "Swiss hut tariff pages are not uniform, so the split between overnight-only and bundle pricing remains approximate on this page."
          }),
          hutWater: buildCostCategory(8, {
            meaning: "Bought drinking water on the hut stages.",
            breakdown: ["A light bought-water allowance is carried across the three hut nights."],
            sourceHints: ["Rotstockh\u00fctte official site", "Gspaltenhornh\u00fctte official site", "Bl\u00fcemlisalph\u00fctte official site"]
          }),
          hutDinnerBreakfast: buildCostCategory(139, {
            meaning: "Three hut dinners and three breakfasts.",
            breakdown: ["One Rotstockh\u00fctte dinner-plus-breakfast set.", "One Gspaltenhornh\u00fctte dinner-plus-breakfast set.", "One Bl\u00fcemlisalph\u00fctte dinner-plus-breakfast set."],
            sourceHints: ["Rotstockh\u00fctte official site", "Gspaltenhornh\u00fctte official site", "Bl\u00fcemlisalph\u00fctte official site"]
          }),
          hutTrailFood: buildCostCategory(36, {
            meaning: "Trail food bought around the huts for the longer Swiss mountain days.",
            breakdown: ["Lunch-pack and snack spend across the Schilthorn traverse, Hoht\u00fcrli day, and long exit day."],
            sourceHints: ["Rotstockh\u00fctte official site", "Gspaltenhornh\u00fctte official site", "Bl\u00fcemlisalph\u00fctte official site"]
          }),
          localFees: buildCostCategory(7, {
            meaning: "Route-local visitor taxes and similar charges not already included in the other categories.",
            breakdown: ["Swiss visitor taxes on the hut nights where these are published separately."],
            sourceHints: ["Gspaltenhornh\u00fctte official site", "Bl\u00fcemlisalph\u00fctte official site"]
          })
        },
        note: "Basis: early-booked rail access plus the mountain-access lift chain, standard adult hut places, and 3 hut nights. Pair figures scale from the same assumption set."
      }
    ]
  };
})();
