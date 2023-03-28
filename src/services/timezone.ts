export default {
  data() {
    return {
      timeZones: [
        "Africa/Abidjan",
        "Africa/Accra",
        "Africa/Addis_Ababa",
        "Africa/Algiers",
        "Africa/Asmara",
        "Africa/Asmera",
        "Africa/Bamako",
        "Africa/Bangui",
        "Africa/Banjul",
        "Africa/Bissau",
        "Africa/Blantyre",
        "Africa/Brazzaville",
        "Africa/Bujumbura",
        "Africa/Cairo",
        "Africa/Casablanca",
        "Africa/Ceuta",
        "Africa/Conakry",
        "Africa/Dakar",
        "Africa/Dar_es_Salaam",
        "Africa/Djibouti",
        "Africa/Douala",
        "Africa/El_Aaiun",
        "Africa/Freetown",
        "Africa/Gaborone",
        "Africa/Harare",
        "Africa/Johannesburg",
        "Africa/Juba",
        "Africa/Kampala",
        "Africa/Khartoum",
        "Africa/Kigali",
        "Africa/Kinshasa",
        "Africa/Lagos",
        "Africa/Libreville",
        "Africa/Lome",
        "Africa/Luanda",
        "Africa/Lubumbashi",
        "Africa/Lusaka",
        "Africa/Malabo",
        "Africa/Maputo",
        "Africa/Maseru",
        "Africa/Mbabane",
        "Africa/Mogadishu",
        "Africa/Monrovia",
        "Africa/Nairobi",
        "Africa/Ndjamena",
        "Africa/Niamey",
        "Africa/Nouakchott",
        "Africa/Ouagadougou",
        "Africa/Porto-Novo",
        "Africa/Sao_Tome",
        "Africa/Timbuktu",
        "Africa/Tripoli",
        "Africa/Tunis",
        "Africa/Windhoek",
        "America/Adak",
        "America/Anchorage",
        "America/Anguilla",
        "America/Antigua",
        "America/Araguaina",
        "America/Argentina/Buenos_Aires",
        "America/Argentina/Catamarca",
        "America/Argentina/ComodRivadavia",
        "America/Argentina/Cordoba",
        "America/Argentina/Jujuy",
        "America/Argentina/La_Rioja",
        "America/Argentina/Mendoza",
        "America/Argentina/Rio_Gallegos",
        "America/Argentina/Salta",
        "America/Argentina/San_Juan",
        "America/Argentina/San_Luis",
        "America/Argentina/Tucuman",
        "America/Argentina/Ushuaia",
        "America/Aruba",
        "America/Asuncion",
        "America/Atikokan",
        "America/Atka",
        "America/Bahia",
        "America/Bahia_Banderas",
        "America/Barbados",
        "America/Belem",
        "America/Belize",
        "America/Blanc-Sablon",
        "America/Boa_Vista",
        "America/Bogota",
        "America/Boise",
        "America/Buenos_Aires",
        "America/Cambridge_Bay",
        "America/Campo_Grande",
        "America/Cancun",
        "America/Caracas",
        "America/Catamarca",
        "America/Cayenne",
        "America/Cayman",
        "America/Chicago",
        "America/Chihuahua",
        "America/Coral_Harbour",
        "America/Cordoba",
        "America/Costa_Rica",
        "America/Creston",
        "America/Cuiaba",
        "America/Curacao",
        "America/Danmarkshavn",
        "America/Dawson",
        "America/Dawson_Creek",
        "America/Denver",
        "America/Detroit",
        "America/Dominica",
        "America/Edmonton",
        "America/Eirunepe",
        "America/El_Salvador",
        "America/Ensenada",
        "America/Fort_Nelson",
        "America/Fort_Wayne",
        "America/Fortaleza",
        "America/Glace_Bay",
        "America/Godthab",
        "America/Goose_Bay",
        "America/Grand_Turk",
        "America/Grenada",
        "America/Guadeloupe",
        "America/Guatemala",
        "America/Guayaquil",
        "America/Halifax",
        "America/Havana",
        "America/Hermosillo",
        "America/Indiana/Indianapolis",
        "America/Indiana/Knox",
        "America/Indiana/Marengo",
        "America/Indiana/Petersburg",
        "America/Indiana/Tell_City",
        "America/Indiana/Vevay",
        "America/Indiana/Vincennes",
        "America/Indiana/Winamac",
        "America/Indianapolis",
        "America/Inuvik",
        "America/Iqaluit",
        "America/Jamaica",
        "America/Jujuy",
        "America/Juneau",
        "America/Kentucky/Louisville",
        "America/Kentucky/Monticello",
        "America/Knox_IN",
        "America/Kralendijk",
        "America/La_Paz",
        "America/Lima",
        "America/Los_Angeles",
        "America/Louisville",
        "America/Lower_Princes",
        "America/Maceio",
        "America/Managua",
        "America/Manaus",
        "America/Marigot",
        "America/Martinique",
        "America/Matamoros",
        "America/Mazatlan",
        "America/Mendoza",
        "America/Menominee",
        "America/Merida",
        "America/Metlakatla",
        "America/Mexico_City",
        "America/Miquelon",
        "America/Moncton",
        "America/Monterrey",
        "America/Montevideo",
        "America/Montreal",
        "America/Montserrat",
        "America/Nassau",
        "America/New_York",
        "America/Nipigon",
        "America/Nome",
        "America/Noronha",
        "America/North_Dakota/Beulah",
        "America/North_Dakota/Center",
        "America/North_Dakota/New_Salem",
        "America/Ojinaga",
        "America/Panama",
        "America/Pangnirtung",
        "America/Paramaribo",
        "America/Phoenix",
        "America/Port-au-Prince",
        "America/Port_of_Spain",
        "America/Porto_Acre",
        "America/Porto_Velho",
        "America/Puerto_Rico",
        "America/Punta_Arenas",
        "America/Rainy_River",
        "America/Rankin_Inlet",
        "America/Recife",
        "America/Regina",
        "America/Resolute",
        "America/Rio_Branco",
        "America/Rosario",
        "America/Santa_Isabel",
        "America/Santarem",
        "America/Santiago",
        "America/Santo_Domingo",
        "America/Sao_Paulo",
        "America/Scoresbysund",
        "America/Shiprock",
        "America/Sitka",
        "America/St_Barthelemy",
        "America/St_Johns",
        "America/St_Kitts",
        "America/St_Lucia",
        "America/St_Thomas",
        "America/St_Vincent",
        "America/Swift_Current",
        "America/Tegucigalpa",
        "America/Thule",
        "America/Thunder_Bay",
        "America/Tijuana",
        "America/Toronto",
        "America/Tortola",
        "America/Vancouver",
        "America/Virgin",
        "America/Whitehorse",
        "America/Winnipeg",
        "America/Yakutat",
        "America/Yellowknife",
        "Antarctica/Casey",
        "Antarctica/Davis",
        "Antarctica/DumontDUrville",
        "Antarctica/Macquarie",
        "Antarctica/Mawson",
        "Antarctica/McMurdo",
        "Antarctica/Palmer",
        "Antarctica/Rothera",
        "Antarctica/South_Pole",
        "Antarctica/Syowa",
        "Antarctica/Troll",
        "Antarctica/Vostok",
        "Arctic/Longyearbyen",
        "Asia/Aden",
        "Asia/Almaty",
        "Asia/Amman",
        "Asia/Anadyr",
        "Asia/Aqtau",
        "Asia/Aqtobe",
        "Asia/Ashgabat",
        "Asia/Ashkhabad",
        "Asia/Atyrau",
        "Asia/Baghdad",
        "Asia/Bahrain",
        "Asia/Baku",
        "Asia/Bangkok",
        "Asia/Barnaul",
        "Asia/Beirut",
        "Asia/Bishkek",
        "Asia/Brunei",
        "Asia/Calcutta",
        "Asia/Chita",
        "Asia/Choibalsan",
        "Asia/Chongqing",
        "Asia/Chungking",
        "Asia/Colombo",
        "Asia/Dacca",
        "Asia/Damascus",
        "Asia/Dhaka",
        "Asia/Dili",
        "Asia/Dubai",
        "Asia/Dushanbe",
        "Asia/Famagusta",
        "Asia/Gaza",
        "Asia/Harbin",
        "Asia/Hebron",
        "Asia/Ho_Chi_Minh",
        "Asia/Hong_Kong",
        "Asia/Hovd",
        "Asia/Irkutsk",
        "Asia/Istanbul",
        "Asia/Jakarta",
        "Asia/Jayapura",
        "Asia/Jerusalem",
        "Asia/Kamchatka",
        "Asia/Karachi",
        "Asia/Kashgar",
        "Asia/Kathmandu",
        "Asia/Katmandu",
        "Asia/Khandyga",
        "Asia/Kolkata",
        "Asia/Krasnoyarsk",
        "Asia/Kuala_Lumpur",
        "Asia/Kuching",
        "Asia/Kuwait",
        "Asia/Macao",
        "Asia/Macau",
        "Asia/Magadan",
        "Asia/Makassar",
        "Asia/Manila",
        "Asia/Muscat",
        "Asia/Nicosia",
        "Asia/Novokuznetsk",
        "Asia/Novosibirsk",
        "Asia/Omsk",
        "Asia/Oral",
        "Asia/Phnom_Penh",
        "Asia/Pontianak",
        "Asia/Qatar",
        "Asia/Qyzylorda",
        "Asia/Riyadh",
        "Asia/Saigon",
        "Asia/Sakhalin",
        "Asia/Samarkand",
        "Asia/Seoul",
        "Asia/Shanghai",
        "Asia/Singapore",
        "Asia/Srednekolymsk",
        "Asia/Taipei",
        "Asia/Tashkent",
        "Asia/Tbilisi",
        "Asia/Tehran",
        "Asia/Tel_Aviv",
        "Asia/Thimbu",
        "Asia/Thimphu",
        "Asia/Tokyo",
        "Asia/Tomsk",
        "Asia/Ujung_Pandang",
        "Asia/Ulaanbaatar",
        "Asia/Ulan_Bator",
        "Asia/Urumqi",
        "Asia/Ust-Nera",
        "Asia/Vientiane",
        "Asia/Vladivostok",
        "Asia/Yakutsk",
        "Asia/Yekaterinburg",
        "Asia/Yerevan",
        "Atlantic/Azores",
        "Atlantic/Bermuda",
        "Atlantic/Canary",
        "Atlantic/Cape_Verde",
        "Atlantic/Faeroe",
        "Atlantic/Faroe",
        "Atlantic/Jan_Mayen",
        "Atlantic/Madeira",
        "Atlantic/Reykjavik",
        "Atlantic/South_Georgia",
        "Atlantic/St_Helena",
        "Atlantic/Stanley",
        "Australia/ACT",
        "Australia/Adelaide",
        "Australia/Brisbane",
        "Australia/Broken_Hill",
        "Australia/Canberra",
        "Australia/Currie",
        "Australia/Darwin",
        "Australia/Hobart",
        "Australia/LHI",
        "Australia/Lindeman",
        "Australia/Lord_Howe",
        "Australia/Melbourne",
        "Australia/NSW",
        "Australia/North",
        "Australia/Perth",
        "Australia/Queensland",
        "Australia/South",
        "Australia/Sydney",
        "Australia/Tasmania",
        "Australia/Victoria",
        "Australia/West",
        "Australia/Yancowinna",
        "Brazil/Acre",
        "Brazil/DeNoronha",
        "Brazil/East",
        "Brazil/West",
        "Canada/Atlantic",
        "Canada/Central",
        "Canada/East-Saskatchewan",
        "Canada/Eastern",
        "Canada/Mountain",
        "Canada/Newfoundland",
        "Canada/Pacific",
        "Canada/Saskatchewan",
        "Canada/Yukon",
        "Chile/Continental",
        "Chile/EasterIsland",
        "Cuba",
        "Egypt",
        "Eire",
        "Europe/Amsterdam",
        "Europe/Andorra",
        "Europe/Astrakhan",
        "Europe/Athens",
        "Europe/Belfast",
        "Europe/Belgrade",
        "Europe/Berlin",
        "Europe/Bratislava",
        "Europe/Brussels",
        "Europe/Bucharest",
        "Europe/Budapest",
        "Europe/Busingen",
        "Europe/Chisinau",
        "Europe/Copenhagen",
        "Europe/Dublin",
        "Europe/Gibraltar",
        "Europe/Guernsey",
        "Europe/Helsinki",
        "Europe/Isle_of_Man",
        "Europe/Istanbul",
        "Europe/Jersey",
        "Europe/Kaliningrad",
        "Europe/Kiev",
        "Europe/Kirov",
        "Europe/Lisbon",
        "Europe/Ljubljana",
        "Europe/London",
        "Europe/Luxembourg",
        "Europe/Madrid",
        "Europe/Malta",
        "Europe/Mariehamn",
        "Europe/Minsk",
        "Europe/Monaco",
        "Europe/Moscow",
        "Europe/Nicosia",
        "Europe/Oslo",
        "Europe/Paris",
        "Europe/Podgorica",
        "Europe/Prague",
        "Europe/Riga",
        "Europe/Rome",
        "Europe/Samara",
        "Europe/San_Marino",
        "Europe/Sarajevo",
        "Europe/Saratov",
        "Europe/Simferopol",
        "Europe/Skopje",
        "Europe/Sofia",
        "Europe/Stockholm",
        "Europe/Tallinn",
        "Europe/Tirane",
        "Europe/Tiraspol",
        "Europe/Ulyanovsk",
        "Europe/Uzhgorod",
        "Europe/Vaduz",
        "Europe/Vatican",
        "Europe/Vienna",
        "Europe/Vilnius",
        "Europe/Volgograd",
        "Europe/Warsaw",
        "Europe/Zagreb",
        "Europe/Zaporozhye",
        "Europe/Zurich",
        "GMT",
        "Iceland",
        "Indian/Antananarivo",
        "Indian/Chagos",
        "Indian/Christmas",
        "Indian/Comoro",
        "Indian/Kerguelen",
        "Indian/Mahe",
        "Indian/Maldives",
        "Indian/Mauritius",
        "Indian/Mayotte",
        "Indian/Reunion",
        "Iran",
        "Israel",
        "Jamaica",
        "Libya",
        "Mexico/BajaNorte",
        "Mexico/BajaSur",
        "Mexico/General",
        "Navajo",
        "Pacific/Auckland",
        "Pacific/Bougainville",
        "Pacific/Chatham",
        "Pacific/Chuuk",
        "Pacific/Easter",
        "Pacific/Efate",
        "Pacific/Fiji",
        "Pacific/Funafuti",
        "Pacific/Galapagos",
        "Pacific/Gambier",
        "Pacific/Guadalcanal",
        "Pacific/Guam",
        "Pacific/Honolulu",
        "Pacific/Johnston",
        "Pacific/Kosrae",
        "Pacific/Kwajalein",
        "Pacific/Majuro",
        "Pacific/Marquesas",
        "Pacific/Midway",
        "Pacific/Nauru",
        "Pacific/Niue",
        "Pacific/Norfolk",
        "Pacific/Noumea",
        "Pacific/Pago_Pago",
        "Pacific/Palau",
        "Pacific/Pitcairn",
        "Pacific/Pohnpei",
        "Pacific/Ponape",
        "Pacific/Port_Moresby",
        "Pacific/Rarotonga",
        "Pacific/Saipan",
        "Pacific/Samoa",
        "Pacific/Tahiti",
        "Pacific/Tarawa",
        "Pacific/Truk",
        "Pacific/Wake",
        "Pacific/Wallis",
        "Pacific/Yap",
        "Poland",
        "Portugal",
        "Turkey",
        "US/Alaska",
        "US/Aleutian",
        "US/Arizona",
        "US/Central",
        "US/East-Indiana",
        "US/Eastern",
        "US/Hawaii",
        "US/Indiana-Starke",
        "US/Michigan",
        "US/Mountain",
        "US/Pacific",
        "US/Pacific-New",
        "US/Samoa",
        "UTC",
      ],
      tz: [
        {
          value: "GMT/UTC",
          label: "GMT/UTC",
          children: [
            {
              value: "GMT-11",
              label: "GMT-11",
              children: [
                {
                  value: "Pacific/Pago_Pago",
                  label: "Pacific/Pago_Pago",
                },
                {
                  value: "US/Samoa",
                  label: "US/Samoa",
                },
                {
                  value: "Pacific/Samoa",
                  label: "Pacific/Samoa",
                },
                {
                  value: "Pacific/Midway",
                  label: "Pacific/Midway",
                },
                {
                  value: "Pacific/Niue",
                  label: "Pacific/Niue",
                },
              ],
            },
            {
              value: "GMT-10",
              label: "GMT-10",
              children: [
                {
                  value: "America/Adak",
                  label: "America/Adak",
                },
                {
                  value: "America/Atka",
                  label: "America/Atka",
                },
                {
                  value: "Pacific/Honolulu",
                  label: "Pacific/Honolulu",
                },
                {
                  value: "Pacific/Johnston",
                  label: "Pacific/Johnston",
                },
                {
                  value: "Pacific/Rarotonga",
                  label: "Pacific/Rarotonga",
                },
                {
                  value: "Pacific/Tahiti",
                  label: "Pacific/Tahiti",
                },
                {
                  value: "US/Aleutian",
                  label: "US/Aleutian",
                },
                {
                  value: "US/Hawaii",
                  label: "US/Hawaii",
                },
              ],
            },
            {
              value: "GMT-9:30",
              label: "GMT-9:30",
              children: [
                {
                  value: "Pacific/Marquesas",
                  label: "Pacific/Marquesas",
                },
              ],
            },
            {
              value: "GMT-9",
              label: "GMT-9",
              children: [
                {
                  value: "America/Anchorage",
                  label: "America/Anchorage",
                },
                {
                  value: "America/Juneau",
                  label: "America/Juneau",
                },
                {
                  value: "America/Metlakatla",
                  label: "America/Metlakatla",
                },
                {
                  value: "America/Nome",
                  label: "America/Nome",
                },
                {
                  value: "America/Sitka",
                  label: "America/Sitka",
                },
                {
                  value: "America/Yakutat",
                  label: "America/Yakutat",
                },
                {
                  value: "Pacific/Gambier",
                  label: "Pacific/Gambier",
                },
                {
                  value: "US/Alaska",
                  label: "US/Alaska",
                },
              ],
            },
            {
              value: "GMT-8",
              label: "GMT-8",
              children: [
                {
                  value: "America/Dawson",
                  label: "America/Dawson",
                },
                {
                  value: "America/Ensenada",
                  label: "America/Ensenada",
                },
                {
                  value: "America/Los_Angeles",
                  label: "America/Los_Angeles",
                },
                {
                  value: "America/Santa_Isabel",
                  label: "America/Santa_Isabel",
                },
                {
                  value: "America/Tijuana",
                  label: "America/Tijuana",
                },
                {
                  value: "America/Vancouver",
                  label: "America/Vancouver",
                },
                {
                  value: "America/Whitehorse",
                  label: "America/Whitehorse",
                },
                {
                  value: "Canada/Pacific",
                  label: "Canada/Pacific",
                },
                {
                  value: "Canada/Yukon",
                  label: "Canada/Yukon",
                },
                {
                  value: "Mexico/BajaNorte",
                  label: "Mexico/BajaNorte",
                },
                {
                  value: "Pacific/Pitcairn",
                  label: "Pacific/Pitcairn",
                },
                {
                  value: "US/Pacific",
                  label: "US/Pacific",
                },
                {
                  value: "US/Pacific-New",
                  label: "US/Pacific-New",
                },
              ],
            },
            {
              value: "GMT-7",
              label: "GMT-7",
              children: [
                {
                  value: "America/Boise",
                  label: "America/Boise",
                },
                {
                  value: "America/Cambridge_Bay",
                  label: "America/Cambridge_Bay",
                },
                {
                  value: "America/Chihuahua",
                  label: "America/Chihuahua",
                },
                {
                  value: "America/Creston",
                  label: "America/Creston",
                },
                {
                  value: "America/Dawson_Creek",
                  label: "America/Dawson_Creek",
                },
                {
                  value: "America/Denver",
                  label: "America/Denver",
                },
                {
                  value: "America/Edmonton",
                  label: "America/Edmonton",
                },
                {
                  value: "America/Fort_Nelson",
                  label: "America/Fort_Nelson",
                },
                {
                  value: "America/Hermosillo",
                  label: "America/Hermosillo",
                },
                {
                  value: "America/Inuvik",
                  label: "America/Inuvik",
                },
                {
                  value: "America/Mazatlan",
                  label: "America/Mazatlan",
                },
                {
                  value: "America/Ojinaga",
                  label: "America/Ojinaga",
                },
                {
                  value: "America/Phoenix",
                  label: "America/Phoenix",
                },
                {
                  value: "America/Shiprock",
                  label: "America/Shiprock",
                },
                {
                  value: "America/Yellowknife",
                  label: "America/Yellowknife",
                },
                {
                  value: "Canada/Mountain",
                  label: "Canada/Mountain",
                },
                {
                  value: "Mexico/BajaSur",
                  label: "Mexico/BajaSur",
                },
                {
                  value: "Navajo",
                  label: "Navajo",
                },
                {
                  value: "US/Arizona",
                  label: "US/Arizona",
                },
                {
                  value: "US/Mountain",
                  label: "US/Mountain",
                },
              ],
            },
            {
              value: "GMT-6",
              label: "GMT-6",
              children: [
                {
                  value: "America/Bahia_Banderas",
                  label: "America/Bahia_Banderas",
                },
                {
                  value: "America/Belize",
                  label: "America/Belize",
                },
                {
                  value: "America/Chicago",
                  label: "America/Chicago",
                },
                {
                  value: "America/Costa_Rica",
                  label: "America/Costa_Rica",
                },
                {
                  value: "America/El_Salvador",
                  label: "America/El_Salvador",
                },
                {
                  value: "America/Guatemala",
                  label: "America/Guatemala",
                },
                {
                  value: "America/Indiana/Knox",
                  label: "America/Indiana/Knox",
                },
                {
                  value: "America/Indiana/Tell_City",
                  label: "America/Indiana/Tell_City",
                },
                {
                  value: "America/Knox_IN",
                  label: "America/Knox_IN",
                },
                {
                  value: "America/Managua",
                  label: "America/Managua",
                },
                {
                  value: "America/Matamoros",
                  label: "America/Matamoros",
                },
                {
                  value: "America/Menominee",
                  label: "America/Menominee",
                },
                {
                  value: "America/Merida",
                  label: "America/Merida",
                },
                {
                  value: "America/Mexico_City",
                  label: "America/Mexico_City",
                },
                {
                  value: "America/Monterrey",
                  label: "America/Monterrey",
                },
                {
                  value: "America/North_Dakota/Beulah",
                  label: "America/North_Dakota/Beulah",
                },
                {
                  value: "America/North_Dakota/Center",
                  label: "America/North_Dakota/Center",
                },
                {
                  value: "America/North_Dakota/New_Salem",
                  label: "America/North_Dakota/New_Salem",
                },
                {
                  value: "America/Rainy_River",
                  label: "America/Rainy_River",
                },
                {
                  value: "America/Rankin_Inlet",
                  label: "America/Rankin_Inlet",
                },
                {
                  value: "America/Regina",
                  label: "America/Regina",
                },
                {
                  value: "America/Resolute",
                  label: "America/Resolute",
                },
                {
                  value: "America/Swift_Current",
                  label: "America/Swift_Current",
                },
                {
                  value: "America/Tegucigalpa",
                  label: "America/Tegucigalpa",
                },
                {
                  value: "America/Winnipeg",
                  label: "America/Winnipeg",
                },
                {
                  value: "Canada/Central",
                  label: "Canada/Central",
                },
                {
                  value: "Canada/East-Saskatchewan",
                  label: "Canada/East-Saskatchewan",
                },
                {
                  value: "Canada/Saskatchewan",
                  label: "Canada/Saskatchewan",
                },
                {
                  value: "Chile/EasterIsland",
                  label: "Chile/EasterIsland",
                },
                {
                  value: "Mexico/General",
                  label: "Mexico/General",
                },
                {
                  value: "Pacific/Easter",
                  label: "Pacific/Easter",
                },
                {
                  value: "Pacific/Galapagos",
                  label: "Pacific/Galapagos",
                },
                {
                  value: "US/Central",
                  label: "US/Central",
                },
                {
                  value: "US/Indiana-Starke",
                  label: "US/Indiana-Starke",
                },
              ],
            },
            {
              value: "GMT-5",
              label: "GMT-5",
              children: [
                {
                  value: "America/Atikokan",
                  label: "America/Atikokan",
                },
                {
                  value: "America/Bogota",
                  label: "America/Bogota",
                },
                {
                  value: "America/Cancun",
                  label: "America/Cancun",
                },
                {
                  value: "America/Cayman",
                  label: "America/Cayman",
                },
                {
                  value: "America/Coral_Harbour",
                  label: "America/Coral_Harbour",
                },
                {
                  value: "America/Detroit",
                  label: "America/Detroit",
                },
                {
                  value: "America/Eirunepe",
                  label: "America/Eirunepe",
                },
                {
                  value: "America/Fort_Wayne",
                  label: "America/Fort_Wayne",
                },
                {
                  value: "America/Grand_Turk",
                  label: "America/Grand_Turk",
                },
                {
                  value: "America/Guayaquil",
                  label: "America/Guayaquil",
                },
                {
                  value: "America/Havana",
                  label: "America/Havana",
                },
                {
                  value: "America/Indiana/Indianapolis",
                  label: "America/Indiana/Indianapolis",
                },
                {
                  value: "America/Indiana/Marengo",
                  label: "America/Indiana/Marengo",
                },
                {
                  value: "America/Indiana/Petersburg",
                  label: "America/Indiana/Petersburg",
                },
                {
                  value: "America/Indiana/Vevay",
                  label: "America/Indiana/Vevay",
                },
                {
                  value: "America/Indiana/Vincennes",
                  label: "America/Indiana/Vincennes",
                },
                {
                  value: "America/Indiana/Winamac",
                  label: "America/Indiana/Winamac",
                },
                {
                  value: "America/Indianapolis",
                  label: "America/Indianapolis",
                },
                {
                  value: "America/Iqaluit",
                  label: "America/Iqaluit",
                },
                {
                  value: "America/Jamaica",
                  label: "America/Jamaica",
                },
                {
                  value: "America/Kentucky/Louisville",
                  label: "America/Kentucky/Louisville",
                },
                {
                  value: "America/Kentucky/Monticello",
                  label: "America/Kentucky/Monticello",
                },
                {
                  value: "America/Lima",
                  label: "America/Lima",
                },
                {
                  value: "America/Louisville",
                  label: "America/Louisville",
                },
                {
                  value: "America/Montreal",
                  label: "America/Montreal",
                },
                {
                  value: "America/Nassau",
                  label: "America/Nassau",
                },
                {
                  value: "America/New_York",
                  label: "America/New_York",
                },
                {
                  value: "America/Nipigon",
                  label: "America/Nipigon",
                },
                {
                  value: "America/Panama",
                  label: "America/Panama",
                },
                {
                  value: "America/Pangnirtung",
                  label: "America/Pangnirtung",
                },
                {
                  value: "America/Port-au-Prince",
                  label: "America/Port-au-Prince",
                },
                {
                  value: "America/Porto_Acre",
                  label: "America/Porto_Acre",
                },
                {
                  value: "America/Rio_Branco",
                  label: "America/Rio_Branco",
                },
                {
                  value: "America/Thunder_Bay",
                  label: "America/Thunder_Bay",
                },
                {
                  value: "America/Toronto",
                  label: "America/Toronto",
                },
                {
                  value: "Brazil/Acre",
                  label: "Brazil/Acre",
                },
                {
                  value: "Canada/Eastern",
                  label: "Canada/Eastern",
                },
                {
                  value: "Cuba",
                  label: "Cuba",
                },
                {
                  value: "Jamaica",
                  label: "Jamaica",
                },
                {
                  value: "US/East-Indiana",
                  label: "US/East-Indiana",
                },
                {
                  value: "US/Eastern",
                  label: "US/Eastern",
                },
                {
                  value: "US/Michigan",
                  label: "US/Michigan",
                },
              ],
            },
            {
              value: "GMT-4",
              label: "GMT-4",
              children: [
                {
                  value: "America/Anguilla",
                  label: "America/Anguilla",
                },
                {
                  value: "America/Antigua",
                  label: "America/Antigua",
                },
                {
                  value: "America/Aruba",
                  label: "America/Aruba",
                },
                {
                  value: "America/Asuncion",
                  label: "America/Asuncion",
                },
                {
                  value: "America/Barbados",
                  label: "America/Barbados",
                },
                {
                  value: "America/Blanc-Sablon",
                  label: "America/Blanc-Sablon",
                },
                {
                  value: "America/Boa_Vista",
                  label: "America/Boa_Vista",
                },
                {
                  value: "America/Campo_Grande",
                  label: "America/Campo_Grande",
                },
                {
                  value: "America/Caracas",
                  label: "America/Caracas",
                },
                {
                  value: "America/Cuiaba",
                  label: "America/Cuiaba",
                },
                {
                  value: "America/Curacao",
                  label: "America/Curacao",
                },
                {
                  value: "America/Dominica",
                  label: "America/Dominica",
                },
                {
                  value: "America/Glace_Bay",
                  label: "America/Glace_Bay",
                },
                {
                  value: "America/Goose_Bay",
                  label: "America/Goose_Bay",
                },
                {
                  value: "America/Grenada",
                  label: "America/Grenada",
                },
                {
                  value: "America/Guadeloupe",
                  label: "America/Guadeloupe",
                },
                {
                  value: "America/Halifax",
                  label: "America/Halifax",
                },
                {
                  value: "America/Kralendijk",
                  label: "America/Kralendijk",
                },
                {
                  value: "America/La_Paz",
                  label: "America/La_Paz",
                },
                {
                  value: "America/Lower_Princes",
                  label: "America/Lower_Princes",
                },
                {
                  value: "America/Manaus",
                  label: "America/Manaus",
                },
                {
                  value: "America/Marigot",
                  label: "America/Marigot",
                },
                {
                  value: "America/Martinique",
                  label: "America/Martinique",
                },
                {
                  value: "America/Moncton",
                  label: "America/Moncton",
                },
                {
                  value: "America/Montserrat",
                  label: "America/Montserrat",
                },
                {
                  value: "America/Port_of_Spain",
                  label: "America/Port_of_Spain",
                },
                {
                  value: "America/Porto_Velho",
                  label: "America/Porto_Velho",
                },
                {
                  value: "America/Puerto_Rico",
                  label: "America/Puerto_Rico",
                },
                {
                  value: "America/Santiago",
                  label: "America/Santiago",
                },
                {
                  value: "America/Santo_Domingo",
                  label: "America/Santo_Domingo",
                },
                {
                  value: "America/St_Barthelemy",
                  label: "America/St_Barthelemy",
                },
                {
                  value: "America/St_Kitts",
                  label: "America/St_Kitts",
                },
                {
                  value: "America/St_Lucia",
                  label: "America/St_Lucia",
                },
                {
                  value: "America/St_Thomas",
                  label: "America/St_Thomas",
                },
                {
                  value: "America/St_Vincent",
                  label: "America/St_Vincent",
                },
                {
                  value: "America/Thule",
                  label: "America/Thule",
                },
                {
                  value: "America/Tortola",
                  label: "America/Tortola",
                },
                {
                  value: "America/Virgin",
                  label: "America/Virgin",
                },
                {
                  value: "Atlantic/Bermuda",
                  label: "Atlantic/Bermuda",
                },
                {
                  value: "Brazil/West",
                  label: "Brazil/West",
                },
                {
                  value: "Canada/Atlantic",
                  label: "Canada/Atlantic",
                },
                {
                  value: "Chile/Continental",
                  label: "Chile/Continental",
                },
              ],
            },
            {
              value: "GMT-3:30",
              label: "GMT-3:30",
              children: [
                {
                  value: "America/St_Johns",
                  label: "America/St_Johns",
                },
                {
                  value: "Canada/Newfoundland",
                  label: "Canada/Newfoundland",
                },
              ],
            },
            {
              value: "GMT-3",
              label: "GMT-3",
              children: [
                {
                  value: "America/Araguaina",
                  label: "America/Araguaina",
                },
                {
                  value: "America/Argentina/Buenos_Aires",
                  label: "America/Argentina/Buenos_Aires",
                },
                {
                  value: "America/Argentina/Catamarca",
                  label: "America/Argentina/Catamarca",
                },
                {
                  value: "America/Argentina/ComodRivadavia",
                  label: "America/Argentina/ComodRivadavia",
                },
                {
                  value: "America/Argentina/Cordoba",
                  label: "America/Argentina/Cordoba",
                },
                {
                  value: "America/Argentina/Jujuy",
                  label: "America/Argentina/Jujuy",
                },
                {
                  value: "America/Argentina/La_Rioja",
                  label: "America/Argentina/La_Rioja",
                },
                {
                  value: "America/Argentina/Mendoza",
                  label: "America/Argentina/Mendoza",
                },
                {
                  value: "America/Argentina/Rio_Gallegos",
                  label: "America/Argentina/Rio_Gallegos",
                },
                {
                  value: "America/Argentina/Salta",
                  label: "America/Argentina/Salta",
                },
                {
                  value: "America/Argentina/San_Juan",
                  label: "America/Argentina/San_Juan",
                },
                {
                  value: "America/Argentina/San_Luis",
                  label: "America/Argentina/San_Luis",
                },
                {
                  value: "America/Argentina/Tucuman",
                  label: "America/Argentina/Tucuman",
                },
                {
                  value: "America/Argentina/Ushuaia",
                  label: "America/Argentina/Ushuaia",
                },
                {
                  value: "America/Bahia",
                  label: "America/Bahia",
                },
                {
                  value: "America/Belem",
                  label: "America/Belem",
                },
                {
                  value: "America/Buenos_Aires",
                  label: "America/Buenos_Aires",
                },
                {
                  value: "America/Catamarca",
                  label: "America/Catamarca",
                },
                {
                  value: "America/Cayenne",
                  label: "America/Cayenne",
                },
                {
                  value: "America/Cordoba",
                  label: "America/Cordoba",
                },
                {
                  value: "America/Fortaleza",
                  label: "America/Fortaleza",
                },
                {
                  value: "America/Godthab",
                  label: "America/Godthab",
                },
                {
                  value: "America/Jujuy",
                  label: "America/Jujuy",
                },
                {
                  value: "America/Maceio",
                  label: "America/Maceio",
                },
                {
                  value: "America/Mendoza",
                  label: "America/Mendoza",
                },
                {
                  value: "America/Miquelon",
                  label: "America/Miquelon",
                },
                {
                  value: "America/Montevideo",
                  label: "America/Montevideo",
                },
                {
                  value: "America/Paramaribo",
                  label: "America/Paramaribo",
                },
                {
                  value: "America/Punta_Arenas",
                  label: "America/Punta_Arenas",
                },
                {
                  value: "America/Recife",
                  label: "America/Recife",
                },
                {
                  value: "America/Rosario",
                  label: "America/Rosario",
                },
                {
                  value: "America/Santarem",
                  label: "America/Santarem",
                },
                {
                  value: "America/Sao_Paulo",
                  label: "America/Sao_Paulo",
                },
                {
                  value: "Antarctica/Palmer",
                  label: "Antarctica/Palmer",
                },
                {
                  value: "Antarctica/Rothera",
                  label: "Antarctica/Rothera",
                },
                {
                  value: "Atlantic/Stanley",
                  label: "Atlantic/Stanley",
                },
                {
                  value: "Brazil/East",
                  label: "Brazil/East",
                },
              ],
            },
            {
              value: "GMT-2",
              label: "GMT-2",
              children: [
                {
                  value: "America/Noronha",
                  label: "America/Noronha",
                },
                {
                  value: "Atlantic/South_Georgia",
                  label: "Atlantic/South_Georgia",
                },
                {
                  value: "Brazil/DeNoronha",
                  label: "Brazil/DeNoronha",
                },
              ],
            },
            {
              value: "GMT-1",
              label: "GMT-1",
              children: [
                {
                  value: "America/Scoresbysund",
                  label: "America/Scoresbysund",
                },
                {
                  value: "Atlantic/Azores",
                  label: "Atlantic/Azores",
                },
                {
                  value: "Atlantic/Cape_Verde",
                  label: "Atlantic/Cape_Verde",
                },
              ],
            },
            {
              value: "GMT",
              label: "GMT",
              children: [
                {
                  value: "GMT",
                  label: "GMT",
                },
                {
                  value: "UTC",
                  label: "UTC",
                },
                {
                  value: "Africa/Abidjan",
                  label: "Africa/Abidjan",
                },
                {
                  value: "Africa/Accra",
                  label: "Africa/Accra",
                },
                {
                  value: "Africa/Bamako",
                  label: "Africa/Bamako",
                },
                {
                  value: "Africa/Banjul",
                  label: "Africa/Banjul",
                },
                {
                  value: "Africa/Bissau",
                  label: "Africa/Bissau",
                },
                {
                  value: "Africa/Casablanca",
                  label: "Africa/Casablanca",
                },
                {
                  value: "Africa/Conakry",
                  label: "Africa/Conakry",
                },
                {
                  value: "Africa/Dakar",
                  label: "Africa/Dakar",
                },
                {
                  value: "Africa/El_Aaiun",
                  label: "Africa/El_Aaiun",
                },
                {
                  value: "Africa/Freetown",
                  label: "Africa/Freetown",
                },
                {
                  value: "Africa/Lome",
                  label: "Africa/Lome",
                },
                {
                  value: "Africa/Monrovia",
                  label: "Africa/Monrovia",
                },
                {
                  value: "Africa/Nouakchott",
                  label: "Africa/Nouakchott",
                },
                {
                  value: "Africa/Ouagadougou",
                  label: "Africa/Ouagadougou",
                },
                {
                  value: "Africa/Sao_Tome",
                  label: "Africa/Sao_Tome",
                },
                {
                  value: "Africa/Timbuktu",
                  label: "Africa/Timbuktu",
                },
                {
                  value: "America/Danmarkshavn",
                  label: "America/Danmarkshavn",
                },
                {
                  value: "Antarctica/Troll",
                  label: "Antarctica/Troll",
                },
                {
                  value: "Atlantic/Canary",
                  label: "Atlantic/Canary",
                },
                {
                  value: "Atlantic/Faeroe",
                  label: "Atlantic/Faeroe",
                },
                {
                  value: "Atlantic/Faroe",
                  label: "Atlantic/Faroe",
                },
                {
                  value: "Atlantic/Madeira",
                  label: "Atlantic/Madeira",
                },
                {
                  value: "Atlantic/Reykjavik",
                  label: "Atlantic/Reykjavik",
                },
                {
                  value: "Atlantic/St_Helena",
                  label: "Atlantic/St_Helena",
                },
                {
                  value: "Eire",
                  label: "Eire",
                },
                {
                  value: "Europe/Belfast",
                  label: "Europe/Belfast",
                },
                {
                  value: "Europe/Dublin",
                  label: "Europe/Dublin",
                },
                {
                  value: "Europe/Guernsey",
                  label: "Europe/Guernsey",
                },
                {
                  value: "Europe/Isle_of_Man",
                  label: "Europe/Isle_of_Man",
                },
                {
                  value: "Europe/Jersey",
                  label: "Europe/Jersey",
                },
                {
                  value: "Europe/Lisbon",
                  label: "Europe/Lisbon",
                },
                {
                  value: "Europe/London",
                  label: "Europe/London",
                },
                {
                  value: "Iceland",
                  label: "Iceland",
                },
                {
                  value: "Portugal",
                  label: "Portugal",
                },
              ],
            },
            {
              value: "GMT+1",
              label: "GMT+1",
              children: [
                {
                  value: "Africa/Algiers",
                  label: "Africa/Algiers",
                },
                {
                  value: "Africa/Bangui",
                  label: "Africa/Bangui",
                },
                {
                  value: "Africa/Brazzaville",
                  label: "Africa/Brazzaville",
                },
                {
                  value: "Africa/Ceuta",
                  label: "Africa/Ceuta",
                },
                {
                  value: "Africa/Douala",
                  label: "Africa/Douala",
                },
                {
                  value: "Africa/Kinshasa",
                  label: "Africa/Kinshasa",
                },
                {
                  value: "Africa/Lagos",
                  label: "Africa/Lagos",
                },
                {
                  value: "Africa/Libreville",
                  label: "Africa/Libreville",
                },
                {
                  value: "Africa/Luanda",
                  label: "Africa/Luanda",
                },
                {
                  value: "Africa/Malabo",
                  label: "Africa/Malabo",
                },
                {
                  value: "Africa/Ndjamena",
                  label: "Africa/Ndjamena",
                },
                {
                  value: "Africa/Niamey",
                  label: "Africa/Niamey",
                },
                {
                  value: "Africa/Porto-Novo",
                  label: "Africa/Porto-Novo",
                },
                {
                  value: "Africa/Tunis",
                  label: "Africa/Tunis",
                },
                {
                  value: "Arctic/Longyearbyen",
                  label: "Arctic/Longyearbyen",
                },
                {
                  value: "Atlantic/Jan_Mayen",
                  label: "Atlantic/Jan_Mayen",
                },
                {
                  value: "Europe/Amsterdam",
                  label: "Europe/Amsterdam",
                },
                {
                  value: "Europe/Andorra",
                  label: "Europe/Andorra",
                },
                {
                  value: "Europe/Belgrade",
                  label: "Europe/Belgrade",
                },
                {
                  value: "Europe/Berlin",
                  label: "Europe/Berlin",
                },
                {
                  value: "Europe/Bratislava",
                  label: "Europe/Bratislava",
                },
                {
                  value: "Europe/Brussels",
                  label: "Europe/Brussels",
                },
                {
                  value: "Europe/Budapest",
                  label: "Europe/Budapest",
                },
                {
                  value: "Europe/Busingen",
                  label: "Europe/Busingen",
                },
                {
                  value: "Europe/Copenhagen",
                  label: "Europe/Copenhagen",
                },
                {
                  value: "Europe/Gibraltar",
                  label: "Europe/Gibraltar",
                },
                {
                  value: "Europe/Ljubljana",
                  label: "Europe/Ljubljana",
                },
                {
                  value: "Europe/Luxembourg",
                  label: "Europe/Luxembourg",
                },
                {
                  value: "Europe/Madrid",
                  label: "Europe/Madrid",
                },
                {
                  value: "Europe/Malta",
                  label: "Europe/Malta",
                },
                {
                  value: "Europe/Monaco",
                  label: "Europe/Monaco",
                },
                {
                  value: "Europe/Oslo",
                  label: "Europe/Oslo",
                },
                {
                  value: "Europe/Paris",
                  label: "Europe/Paris",
                },
                {
                  value: "Europe/Podgorica",
                  label: "Europe/Podgorica",
                },
                {
                  value: "Europe/Prague",
                  label: "Europe/Prague",
                },
                {
                  value: "Europe/Rome",
                  label: "Europe/Rome",
                },
                {
                  value: "Europe/San_Marino",
                  label: "Europe/San_Marino",
                },
                {
                  value: "Europe/Sarajevo",
                  label: "Europe/Sarajevo",
                },
                {
                  value: "Europe/Skopje",
                  label: "Europe/Skopje",
                },
                {
                  value: "Europe/Stockholm",
                  label: "Europe/Stockholm",
                },
                {
                  value: "Europe/Tirane",
                  label: "Europe/Tirane",
                },
                {
                  value: "Europe/Vaduz",
                  label: "Europe/Vaduz",
                },
                {
                  value: "Europe/Vatican",
                  label: "Europe/Vatican",
                },
                {
                  value: "Europe/Vienna",
                  label: "Europe/Vienna",
                },
                {
                  value: "Europe/Warsaw",
                  label: "Europe/Warsaw",
                },
                {
                  value: "Europe/Zagreb",
                  label: "Europe/Zagreb",
                },
                {
                  value: "Europe/Zurich",
                  label: "Europe/Zurich",
                },
                {
                  value: "Poland",
                  label: "Poland",
                },
              ],
            },
            {
              value: "GMT+2",
              label: "GMT+2",
              children: [
                {
                  value: "Africa/Blantyre",
                  label: "Africa/Blantyre",
                },
                {
                  value: "Africa/Bujumbura",
                  label: "Africa/Bujumbura",
                },
                {
                  value: "Africa/Cairo",
                  label: "Africa/Cairo",
                },
                {
                  value: "Africa/Gaborone",
                  label: "Africa/Gaborone",
                },
                {
                  value: "Africa/Harare",
                  label: "Africa/Harare",
                },
                {
                  value: "Africa/Johannesburg",
                  label: "Africa/Johannesburg",
                },
                {
                  value: "Africa/Khartoum",
                  label: "Africa/Khartoum",
                },
                {
                  value: "Africa/Kigali",
                  label: "Africa/Kigali",
                },
                {
                  value: "Africa/Lubumbashi",
                  label: "Africa/Lubumbashi",
                },
                {
                  value: "Africa/Lusaka",
                  label: "Africa/Lusaka",
                },
                {
                  value: "Africa/Maputo",
                  label: "Africa/Maputo",
                },
                {
                  value: "Africa/Maseru",
                  label: "Africa/Maseru",
                },
                {
                  value: "Africa/Mbabane",
                  label: "Africa/Mbabane",
                },
                {
                  value: "Africa/Tripoli",
                  label: "Africa/Tripoli",
                },
                {
                  value: "Africa/Windhoek",
                  label: "Africa/Windhoek",
                },
                {
                  value: "Asia/Amman",
                  label: "Asia/Amman",
                },
                {
                  value: "Asia/Beirut",
                  label: "Asia/Beirut",
                },
                {
                  value: "Asia/Damascus",
                  label: "Asia/Damascus",
                },
                {
                  value: "Asia/Famagusta",
                  label: "Asia/Famagusta",
                },
                {
                  value: "Asia/Gaza",
                  label: "Asia/Gaza",
                },
                {
                  value: "Asia/Hebron",
                  label: "Asia/Hebron",
                },
                {
                  value: "Asia/Jerusalem",
                  label: "Asia/Jerusalem",
                },
                {
                  value: "Asia/Nicosia",
                  label: "Asia/Nicosia",
                },
                {
                  value: "Asia/Tel_Aviv",
                  label: "Asia/Tel_Aviv",
                },
                {
                  value: "Egypt",
                  label: "Egypt",
                },
                {
                  value: "Europe/Athens",
                  label: "Europe/Athens",
                },
                {
                  value: "Europe/Bucharest",
                  label: "Europe/Bucharest",
                },
                {
                  value: "Europe/Chisinau",
                  label: "Europe/Chisinau",
                },
                {
                  value: "Europe/Helsinki",
                  label: "Europe/Helsinki",
                },
                {
                  value: "Europe/Kaliningrad",
                  label: "Europe/Kaliningrad",
                },
                {
                  value: "Europe/Kiev",
                  label: "Europe/Kiev",
                },
                {
                  value: "Europe/Mariehamn",
                  label: "Europe/Mariehamn",
                },
                {
                  value: "Europe/Nicosia",
                  label: "Europe/Nicosia",
                },
                {
                  value: "Europe/Riga",
                  label: "Europe/Riga",
                },
                {
                  value: "Europe/Sofia",
                  label: "Europe/Sofia",
                },
                {
                  value: "Europe/Tallinn",
                  label: "Europe/Tallinn",
                },
                {
                  value: "Europe/Tiraspol",
                  label: "Europe/Tiraspol",
                },
                {
                  value: "Europe/Uzhgorod",
                  label: "Europe/Uzhgorod",
                },
                {
                  value: "Europe/Vilnius",
                  label: "Europe/Vilnius",
                },
                {
                  value: "Europe/Zaporozhye",
                  label: "Europe/Zaporozhye",
                },
                {
                  value: "Israel",
                  label: "Israel",
                },
                {
                  value: "Libya",
                  label: "Libya",
                },
              ],
            },
            {
              value: "GMT+3",
              label: "GMT+3",
              children: [
                {
                  value: "Africa/Addis_Ababa",
                  label: "Africa/Addis_Ababa",
                },
                {
                  value: "Africa/Asmara",
                  label: "Africa/Asmara",
                },
                {
                  value: "Africa/Asmera",
                  label: "Africa/Asmera",
                },
                {
                  value: "Africa/Dar_es_Salaam",
                  label: "Africa/Dar_es_Salaam",
                },
                {
                  value: "Africa/Djibouti",
                  label: "Africa/Djibouti",
                },
                {
                  value: "Africa/Juba",
                  label: "Africa/Juba",
                },
                {
                  value: "Africa/Kampala",
                  label: "Africa/Kampala",
                },
                {
                  value: "Africa/Mogadishu",
                  label: "Africa/Mogadishu",
                },
                {
                  value: "Africa/Nairobi",
                  label: "Africa/Nairobi",
                },
                {
                  value: "Antarctica/Syowa",
                  label: "Antarctica/Syowa",
                },
                {
                  value: "Asia/Aden",
                  label: "Asia/Aden",
                },
                {
                  value: "Asia/Baghdad",
                  label: "Asia/Baghdad",
                },
                {
                  value: "Asia/Bahrain",
                  label: "Asia/Bahrain",
                },
                {
                  value: "Asia/Istanbul",
                  label: "Asia/Istanbul",
                },
                {
                  value: "Asia/Kuwait",
                  label: "Asia/Kuwait",
                },
                {
                  value: "Asia/Qatar",
                  label: "Asia/Qatar",
                },
                {
                  value: "Asia/Riyadh",
                  label: "Asia/Riyadh",
                },
                {
                  value: "Europe/Istanbul",
                  label: "Europe/Istanbul",
                },
                {
                  value: "Europe/Kirov",
                  label: "Europe/Kirov",
                },
                {
                  value: "Europe/Minsk",
                  label: "Europe/Minsk",
                },
                {
                  value: "Europe/Moscow",
                  label: "Europe/Moscow",
                },
                {
                  value: "Europe/Simferopol",
                  label: "Europe/Simferopol",
                },
                {
                  value: "Europe/Volgograd",
                  label: "Europe/Volgograd",
                },
                {
                  value: "Indian/Antananarivo",
                  label: "Indian/Antananarivo",
                },
                {
                  value: "Indian/Comoro",
                  label: "Indian/Comoro",
                },
                {
                  value: "Indian/Mayotte",
                  label: "Indian/Mayotte",
                },
                {
                  value: "Turkey",
                  label: "Turkey",
                },
              ],
            },
            {
              value: "GMT+3:30",
              label: "GMT+3:30",
              children: [
                {
                  value: "Asia/Tehran",
                  label: "Asia/Tehran",
                },
                {
                  value: "Iran",
                  label: "Iran",
                },
              ],
            },
            {
              value: "GMT+4",
              label: "GMT+4",
              children: [
                {
                  value: "Asia/Baku",
                  label: "Asia/Baku",
                },
                {
                  value: "Asia/Dubai",
                  label: "Asia/Dubai",
                },
                {
                  value: "Asia/Muscat",
                  label: "Asia/Muscat",
                },
                {
                  value: "Asia/Tbilisi",
                  label: "Asia/Tbilisi",
                },
                {
                  value: "Asia/Yerevan",
                  label: "Asia/Yerevan",
                },
                {
                  value: "Europe/Astrakhan",
                  label: "Europe/Astrakhan",
                },
                {
                  value: "Europe/Samara",
                  label: "Europe/Samara",
                },
                {
                  value: "Europe/Saratov",
                  label: "Europe/Saratov",
                },
                {
                  value: "Europe/Ulyanovsk",
                  label: "Europe/Ulyanovsk",
                },
                {
                  value: "Indian/Mahe",
                  label: "Indian/Mahe",
                },
                {
                  value: "Indian/Mauritius",
                  label: "Indian/Mauritius",
                },
                {
                  value: "Indian/Reunion",
                  label: "Indian/Reunion",
                },
              ],
            },
            {
              value: "GMT+5",
              label: "GMT+5",
              children: [
                {
                  value: "Antarctica/Mawson",
                  label: "Antarctica/Mawson",
                },
                {
                  value: "Asia/Aqtau",
                  label: "Asia/Aqtau",
                },
                {
                  value: "Asia/Aqtobe",
                  label: "Asia/Aqtobe",
                },
                {
                  value: "Asia/Ashgabat",
                  label: "Asia/Ashgabat",
                },
                {
                  value: "Asia/Ashkhabad",
                  label: "Asia/Ashkhabad",
                },
                {
                  value: "Asia/Atyrau",
                  label: "Asia/Atyrau",
                },
                {
                  value: "Asia/Dushanbe",
                  label: "Asia/Dushanbe",
                },
                {
                  value: "Asia/Karachi",
                  label: "Asia/Karachi",
                },
                {
                  value: "Asia/Oral",
                  label: "Asia/Oral",
                },
                {
                  value: "Asia/Samarkand",
                  label: "Asia/Samarkand",
                },
                {
                  value: "Asia/Tashkent",
                  label: "Asia/Tashkent",
                },
                {
                  value: "Asia/Yekaterinburg",
                  label: "Asia/Yekaterinburg",
                },
                {
                  value: "Indian/Kerguelen",
                  label: "Indian/Kerguelen",
                },
                {
                  value: "Indian/Maldives",
                  label: "Indian/Maldives",
                },
              ],
            },
            {
              value: "GMT+5:30",
              label: "GMT+5:30",
              children: [
                {
                  value: "Asia/Calcutta",
                  label: "Asia/Calcutta",
                },
                {
                  value: "Asia/Colombo",
                  label: "Asia/Colombo",
                },
                {
                  value: "Asia/Kolkata",
                  label: "Asia/Kolkata",
                },
              ],
            },
            {
              value: "GMT+5:45",
              label: "GMT+5:45",
              children: [
                {
                  value: "Asia/Kathmandu",
                  label: "Asia/Kathmandu",
                },
                {
                  value: "Asia/Katmandu",
                  label: "Asia/Katmandu",
                },
              ],
            },
            {
              value: "GMT+6",
              label: "GMT+6",
              children: [
                {
                  value: "Antarctica/Vostok",
                  label: "Antarctica/Vostok",
                },
                {
                  value: "Asia/Almaty",
                  label: "Asia/Almaty",
                },
                {
                  value: "Asia/Bishkek",
                  label: "Asia/Bishkek",
                },
                {
                  value: "Asia/Dacca",
                  label: "Asia/Dacca",
                },
                {
                  value: "Asia/Dhaka",
                  label: "Asia/Dhaka",
                },
                {
                  value: "Asia/Kashgar",
                  label: "Asia/Kashgar",
                },
                {
                  value: "Asia/Omsk",
                  label: "Asia/Omsk",
                },
                {
                  value: "Asia/Qyzylorda",
                  label: "Asia/Qyzylorda",
                },
                {
                  value: "Asia/Thimbu",
                  label: "Asia/Thimbu",
                },
                {
                  value: "Asia/Thimphu",
                  label: "Asia/Thimphu",
                },
                {
                  value: "Asia/Urumqi",
                  label: "Asia/Urumqi",
                },
                {
                  value: "Indian/Chagos",
                  label: "Indian/Chagos",
                },
              ],
            },
            {
              value: "GMT+7",
              label: "GMT+7",
              children: [
                {
                  value: "Antarctica/Davis",
                  label: "Antarctica/Davis",
                },
                {
                  value: "Asia/Bangkok",
                  label: "Asia/Bangkok",
                },
                {
                  value: "Asia/Barnaul",
                  label: "Asia/Barnaul",
                },
                {
                  value: "Asia/Ho_Chi_Minh",
                  label: "Asia/Ho_Chi_Minh",
                },
                {
                  value: "Asia/Hovd",
                  label: "Asia/Hovd",
                },
                {
                  value: "Asia/Jakarta",
                  label: "Asia/Jakarta",
                },
                {
                  value: "Asia/Krasnoyarsk",
                  label: "Asia/Krasnoyarsk",
                },
                {
                  value: "Asia/Novokuznetsk",
                  label: "Asia/Novokuznetsk",
                },
                {
                  value: "Asia/Novosibirsk",
                  label: "Asia/Novosibirsk",
                },
                {
                  value: "Asia/Phnom_Penh",
                  label: "Asia/Phnom_Penh",
                },
                {
                  value: "Asia/Pontianak",
                  label: "Asia/Pontianak",
                },
                {
                  value: "Asia/Saigon",
                  label: "Asia/Saigon",
                },
                {
                  value: "Asia/Tomsk",
                  label: "Asia/Tomsk",
                },
                {
                  value: "Asia/Vientiane",
                  label: "Asia/Vientiane",
                },
                {
                  value: "Indian/Christmas",
                  label: "Indian/Christmas",
                },
              ],
            },
            {
              value: "GMT+8",
              label: "GMT+8",
              children: [
                {
                  value: "Asia/Brunei",
                  label: "Asia/Brunei",
                },
                {
                  value: "Asia/Choibalsan",
                  label: "Asia/Choibalsan",
                },
                {
                  value: "Asia/Chongqing",
                  label: "Asia/Chongqing",
                },
                {
                  value: "Asia/Chungking",
                  label: "Asia/Chungking",
                },
                {
                  value: "Asia/Harbin",
                  label: "Asia/Harbin",
                },
                {
                  value: "Asia/Hong_Kong",
                  label: "Asia/Hong_Kong",
                },
                {
                  value: "Asia/Irkutsk",
                  label: "Asia/Irkutsk",
                },
                {
                  value: "Asia/Kuala_Lumpur",
                  label: "Asia/Kuala_Lumpur",
                },
                {
                  value: "Asia/Kuching",
                  label: "Asia/Kuching",
                },
                {
                  value: "Asia/Macao",
                  label: "Asia/Macao",
                },
                {
                  value: "Asia/Macau",
                  label: "Asia/Macau",
                },
                {
                  value: "Asia/Makassar",
                  label: "Asia/Makassar",
                },
                {
                  value: "Asia/Manila",
                  label: "Asia/Manila",
                },
                {
                  value: "Asia/Shanghai",
                  label: "Asia/Shanghai",
                },
                {
                  value: "Asia/Singapore",
                  label: "Asia/Singapore",
                },
                {
                  value: "Asia/Taipei",
                  label: "Asia/Taipei",
                },
                {
                  value: "Asia/Ujung_Pandang",
                  label: "Asia/Ujung_Pandang",
                },
                {
                  value: "Asia/Ulaanbaatar",
                  label: "Asia/Ulaanbaatar",
                },
                {
                  value: "Asia/Ulan_Bator",
                  label: "Asia/Ulan_Bator",
                },
                {
                  value: "Australia/Perth",
                  label: "Australia/Perth",
                },
                {
                  value: "Australia/West",
                  label: "Australia/West",
                },
              ],
            },
            {
              value: "GMT+9",
              label: "GMT+9",
              children: [
                {
                  value: "Asia/Chita",
                  label: "Asia/Chita",
                },
                {
                  value: "Asia/Dili",
                  label: "Asia/Dili",
                },
                {
                  value: "Asia/Jayapura",
                  label: "Asia/Jayapura",
                },
                {
                  value: "Asia/Khandyga",
                  label: "Asia/Khandyga",
                },
                {
                  value: "Asia/Seoul",
                  label: "Asia/Seoul",
                },
                {
                  value: "Asia/Tokyo",
                  label: "Asia/Tokyo",
                },
                {
                  value: "Asia/Yakutsk",
                  label: "Asia/Yakutsk",
                },
                {
                  value: "Pacific/Palau",
                  label: "Pacific/Palau",
                },
              ],
            },
            {
              value: "GMT+9:30",
              label: "GMT+9:30",
              children: [
                {
                  value: "Australia/Adelaide",
                  label: "Australia/Adelaide",
                },
                {
                  value: "Australia/Broken_Hill",
                  label: "Australia/Broken_Hill",
                },
                {
                  value: "Australia/Darwin",
                  label: "Australia/Darwin",
                },
                {
                  value: "Australia/North",
                  label: "Australia/North",
                },
                {
                  value: "Australia/South",
                  label: "Australia/South",
                },
                {
                  value: "Australia/Yancowinna",
                  label: "Australia/Yancowinna",
                },
              ],
            },
            {
              value: "GMT+10",
              label: "GMT+10",
              children: [
                {
                  value: "Antarctica/DumontDUrville",
                  label: "Antarctica/DumontDUrville",
                },
                {
                  value: "Asia/Ust-Nera",
                  label: "Asia/Ust-Nera",
                },
                {
                  value: "Asia/Vladivostok",
                  label: "Asia/Vladivostok",
                },
                {
                  value: "Australia/ACT",
                  label: "Australia/ACT",
                },
                {
                  value: "Australia/Brisbane",
                  label: "Australia/Brisbane",
                },
                {
                  value: "Australia/Canberra",
                  label: "Australia/Canberra",
                },
                {
                  value: "Australia/Currie",
                  label: "Australia/Currie",
                },
                {
                  value: "Australia/Hobart",
                  label: "Australia/Hobart",
                },
                {
                  value: "Australia/Lindeman",
                  label: "Australia/Lindeman",
                },
                {
                  value: "Australia/Melbourne",
                  label: "Australia/Melbourne",
                },
                {
                  value: "Australia/NSW",
                  label: "Australia/NSW",
                },
                {
                  value: "Australia/Queensland",
                  label: "Australia/Queensland",
                },
                {
                  value: "Australia/Sydney",
                  label: "Australia/Sydney",
                },
                {
                  value: "Australia/Tasmania",
                  label: "Australia/Tasmania",
                },
                {
                  value: "Australia/Victoria",
                  label: "Australia/Victoria",
                },
                {
                  value: "Pacific/Chuuk",
                  label: "Pacific/Chuuk",
                },
                {
                  value: "Pacific/Guam",
                  label: "Pacific/Guam",
                },
                {
                  value: "Pacific/Port_Moresby",
                  label: "Pacific/Port_Moresby",
                },
                {
                  value: "Pacific/Saipan",
                  label: "Pacific/Saipan",
                },
                {
                  value: "Pacific/Truk",
                  label: "Pacific/Truk",
                },
                {
                  value: "Pacific/Yap",
                  label: "Pacific/Yap",
                },
              ],
            },
            {
              value: "GMT+10:30",
              label: "GMT+10:30",
              children: [
                {
                  value: "Australia/LHI",
                  label: "Australia/LHI",
                },
                {
                  value: "Australia/Lord_Howe",
                  label: "Australia/Lord_Howe",
                },
              ],
            },
            {
              value: "GMT+11",
              label: "GMT+11",
              children: [
                {
                  value: "Antarctica/Casey",
                  label: "Antarctica/Casey",
                },
                {
                  value: "Antarctica/Macquarie",
                  label: "Antarctica/Macquarie",
                },
                {
                  value: "Asia/Magadan",
                  label: "Asia/Magadan",
                },
                {
                  value: "Asia/Sakhalin",
                  label: "Asia/Sakhalin",
                },
                {
                  value: "Asia/Srednekolymsk",
                  label: "Asia/Srednekolymsk",
                },
                {
                  value: "Pacific/Bougainville",
                  label: "Pacific/Bougainville",
                },
                {
                  value: "Pacific/Efate",
                  label: "Pacific/Efate",
                },
                {
                  value: "Pacific/Guadalcanal",
                  label: "Pacific/Guadalcanal",
                },
                {
                  value: "Pacific/Kosrae",
                  label: "Pacific/Kosrae",
                },
                {
                  value: "Pacific/Norfolk",
                  label: "Pacific/Norfolk",
                },
                {
                  value: "Pacific/Noumea",
                  label: "Pacific/Noumea",
                },
                {
                  value: "Pacific/Pohnpei",
                  label: "Pacific/Pohnpei",
                },
                {
                  value: "Pacific/Ponape",
                  label: "Pacific/Ponape",
                },
              ],
            },
            {
              value: "GMT+12",
              label: "GMT+12",
              children: [
                {
                  value: "Antarctica/McMurdo",
                  label: "Antarctica/McMurdo",
                },
                {
                  value: "Antarctica/South_Pole",
                  label: "Antarctica/South_Pole",
                },
                {
                  value: "Asia/Anadyr",
                  label: "Asia/Anadyr",
                },
                {
                  value: "Asia/Kamchatka",
                  label: "Asia/Kamchatka",
                },
                {
                  value: "Pacific/Auckland",
                  label: "Pacific/Auckland",
                },
                {
                  value: "Pacific/Fiji",
                  label: "Pacific/Fiji",
                },
                {
                  value: "Pacific/Funafuti",
                  label: "Pacific/Funafuti",
                },
                {
                  value: "Pacific/Kwajalein",
                  label: "Pacific/Kwajalein",
                },
                {
                  value: "Pacific/Majuro",
                  label: "Pacific/Majuro",
                },
                {
                  value: "Pacific/Nauru",
                  label: "Pacific/Nauru",
                },
                {
                  value: "Pacific/Tarawa",
                  label: "Pacific/Tarawa",
                },
                {
                  value: "Pacific/Wake",
                  label: "Pacific/Wake",
                },
                {
                  value: "Pacific/Wallis",
                  label: "Pacific/Wallis",
                },
              ],
            },
            {
              value: "GMT+12:45",
              label: "GMT+12:45",
              children: [
                {
                  value: "Pacific/Chatham",
                  label: "Pacific/Chatham",
                },
              ],
            },
          ],
        },
        {
          value: "DST",
          label: "DST",
          children: [
            {
              value: "GMT-9",
              label: "GMT-9",
              children: [
                {
                  value: "America/Adak",
                  label: "America/Adak",
                },
                {
                  value: "America/Atka",
                  label: "America/Atka",
                },
                {
                  value: "US/Aleutian",
                  label: "US/Aleutian",
                },
                {
                  value: "",
                  label: "",
                },
                {
                  value: "",
                  label: "",
                },
              ],
            },
            {
              value: "GMT-8",
              label: "GMT-8",
              children: [
                {
                  value: "America/Anchorage",
                  label: "America/Anchorage",
                },
                {
                  value: "America/Juneau",
                  label: "America/Juneau",
                },
                {
                  value: "America/Metlakatla",
                  label: "America/Metlakatla",
                },
                {
                  value: "America/Nome",
                  label: "America/Nome",
                },
                {
                  value: "America/Sitka",
                  label: "America/Sitka",
                },
                {
                  value: "America/Yakutat",
                  label: "America/Yakutat",
                },
                {
                  value: "US/Alaska",
                  label: "US/Alaska",
                },
              ],
            },
            {
              value: "GMT-7",
              label: "GMT-7",
              children: [
                {
                  value: "America/Dawson",
                  label: "America/Dawson",
                },
                {
                  value: "America/Ensenada",
                  label: "America/Ensenada",
                },
                {
                  value: "America/Los_Angeles",
                  label: "America/Los_Angeles",
                },
                {
                  value: "America/Santa_Isabel",
                  label: "America/Santa_Isabel",
                },
                {
                  value: "America/Vancouver",
                  label: "America/Vancouver",
                },
                {
                  value: "America/Whitehorse",
                  label: "America/Whitehorse",
                },
                {
                  value: "America/Tijuana",
                  label: "America/Tijuana",
                },
                {
                  value: "Canada/Pacific",
                  label: "Canada/Pacific",
                },
                {
                  value: "Canada/Yukon",
                  label: "Canada/Yukon",
                },
                {
                  value: "Mexico/BajaNorte",
                  label: "Mexico/BajaNorte",
                },
                {
                  value: "US/Pacific",
                  label: "US/Pacific",
                },
                {
                  value: "US/Pacific-New",
                  label: "US/Pacific-New",
                },
              ],
            },
            {
              value: "GMT-6",
              label: "GMT-6",
              children: [
                {
                  value: "America/Denver",
                  label: "America/Denver",
                },
                {
                  value: "America/Edmonton",
                  label: "America/Edmonton",
                },
                {
                  value: "America/Shiprock",
                  label: "America/Shiprock",
                },
                {
                  value: "America/Inuvik",
                  label: "America/Inuvik",
                },
                {
                  value: "America/Mazatlan",
                  label: "America/Mazatlan",
                },
                {
                  value: "America/Ojinaga",
                  label: "America/Ojinaga",
                },
                {
                  value: "America/Shiprock",
                  label: "America/Shiprock",
                },
                {
                  value: "Canada/Mountain",
                  label: "Canada/Mountain",
                },
                {
                  value: "Mexico/BajaSur",
                  label: "Mexico/BajaSur",
                },
                {
                  value: "Navajo",
                  label: "Navajo",
                },
                {
                  value: "US/Mountain",
                  label: "US/Mountain",
                },
              ],
            },
            {
              value: "GMT-5",
              label: "GMT-5",
              children: [
                {
                  value: "America/Bahia_Banderas",
                  label: "America/Bahia_Banderas",
                },
                {
                  value: "America/Chicago",
                  label: "America/Chicago",
                },
                {
                  value: "America/Indiana/Knox",
                  label: "America/Indiana/Knox",
                },
                {
                  value: "America/Indiana/Tell_City",
                  label: "America/Indiana/Tell_City",
                },
                {
                  value: "America/Knox_IN",
                  label: "America/Knox_IN",
                },
                {
                  value: "America/Matamoros",
                  label: "America/Matamoros",
                },
                {
                  value: "America/Menominee",
                  label: "America/Menominee",
                },
                {
                  value: "America/Merida",
                  label: "America/Merida",
                },
                {
                  value: "America/Mexico_City",
                  label: "America/Mexico_City",
                },
                {
                  value: "America/Monterrey",
                  label: "America/Monterrey",
                },
                {
                  value: "America/North_Dakota/Beulah",
                  label: "America/North_Dakota/Beulah",
                },
                {
                  value: "America/North_Dakota/Center",
                  label: "America/North_Dakota/Center",
                },
                {
                  value: "America/North_Dakota/New_Salem",
                  label: "America/North_Dakota/New_Salem",
                },
                {
                  value: "America/Rainy_River",
                  label: "America/Rainy_River",
                },
                {
                  value: "America/Rankin_Inlet",
                  label: "America/Rankin_Inlet",
                },
                {
                  value: "America/Resolute",
                  label: "America/Resolute",
                },
                {
                  value: "America/Winnipeg",
                  label: "America/Winnipeg",
                },
                {
                  value: "Canada/Central",
                  label: "Canada/Central",
                },
                {
                  value: "Chile/EasterIsland",
                  label: "Chile/EasterIsland",
                },
                {
                  value: "Mexico/General",
                  label: "Mexico/General",
                },
                {
                  value: "Pacific/Easter",
                  label: "Pacific/Easter",
                },
                {
                  value: "US/Indiana-Starke",
                  label: "US/Indiana-Starke",
                },
              ],
            },
            {
              value: "GMT-4",
              label: "GMT-4",
              children: [
                {
                  value: "America/Detroit",
                  label: "America/Detroit",
                },
                {
                  value: "America/Fort_Wayne",
                  label: "America/Fort_Wayne",
                },
                {
                  value: "America/Grand_Turk",
                  label: "America/Grand_Turk",
                },
                {
                  value: "America/Havana",
                  label: "America/Havana",
                },
                {
                  value: "America/Indiana/Indianapolis",
                  label: "America/Indiana/Indianapolis",
                },
                {
                  value: "America/Indiana/Marengo",
                  label: "America/Indiana/Marengo",
                },
                {
                  value: "America/Indiana/Petersburg",
                  label: "America/Indiana/Petersburg",
                },
                {
                  value: "America/Indiana/Vevay",
                  label: "America/Indiana/Vevay",
                },
                {
                  value: "America/Indiana/Vincennes",
                  label: "America/Indiana/Vincennes",
                },
                {
                  value: "America/Indiana/Winamac",
                  label: "America/Indiana/Winamac",
                },
                {
                  value: "America/Indianapolis",
                  label: "America/Indianapolis",
                },
                {
                  value: "America/Iqaluit",
                  label: "America/Iqaluit",
                },
                {
                  value: "America/Kentucky/Louisville",
                  label: "America/Kentucky/Louisville",
                },
                {
                  value: "America/Kentucky/Monticello",
                  label: "America/Kentucky/Monticello",
                },
                {
                  value: "America/Louisville",
                  label: "America/Louisville",
                },
                {
                  value: "America/Montreal",
                  label: "America/Montreal",
                },
                {
                  value: "America/Nassau",
                  label: "America/Nassau",
                },
                {
                  value: "America/New_York",
                  label: "America/New_York",
                },
                {
                  value: "America/Nipigon",
                  label: "America/Nipigon",
                },
                {
                  value: "America/Pangnirtung",
                  label: "America/Pangnirtung",
                },
                {
                  value: "America/Port-au-Prince",
                  label: "America/Port-au-Prince",
                },
                {
                  value: "America/Thunder_Bay",
                  label: "America/Thunder_Bay",
                },
                {
                  value: "America/Toronto",
                  label: "America/Toronto",
                },
                {
                  value: "Canada/Eastern",
                  label: "Canada/Eastern",
                },
                {
                  value: "Cuba",
                  label: "Cuba",
                },
                {
                  value: "US/East-Indiana",
                  label: "US/East-Indiana",
                },
                {
                  value: "US/Eastern",
                  label: "US/Eastern",
                },
                {
                  value: "US/Michigan",
                  label: "US/Michigan",
                },
              ],
            },
            {
              value: "GMT-3",
              label: "GMT-3",
              children: [
                {
                  value: "America/Asuncion",
                  label: "America/Asuncion",
                },
                {
                  value: "America/Campo_Grande",
                  label: "America/Campo_Grande",
                },
                {
                  value: "America/Cuiaba",
                  label: "America/Cuiaba",
                },
                {
                  value: "America/Glace_Bay",
                  label: "America/Glace_Bay",
                },
                {
                  value: "America/Goose_Bay",
                  label: "America/Goose_Bay",
                },
                {
                  value: "America/Halifax",
                  label: "America/Halifax",
                },
                {
                  value: "America/Moncton",
                  label: "America/Moncton",
                },
                {
                  value: "America/Santiago",
                  label: "America/Santiago",
                },
                {
                  value: "America/Thule",
                  label: "America/Thule",
                },
                {
                  value: "Atlantic/Bermuda",
                  label: "Atlantic/Bermuda",
                },
                {
                  value: "Canada/Atlantic",
                  label: "Canada/Atlantic",
                },
                {
                  value: "Chile/Continental",
                  label: "Chile/Continental",
                },
              ],
            },
            {
              value: "GMT-2:30",
              label: "GMT-2:30",
              children: [
                {
                  value: "America/St_Johns",
                  label: "America/St_Johns",
                },
                {
                  value: "Canada/Newfoundland",
                  label: "Canada/Newfoundland",
                },
              ],
            },
            {
              value: "GMT-2",
              label: "GMT-2",
              children: [
                {
                  value: "America/Godthab",
                  label: "America/Godthab",
                },
                {
                  value: "America/Miquelon",
                  label: "America/Miquelon",
                },
                {
                  value: "America/Sao_Paulo",
                  label: "America/Sao_Paulo",
                },
                {
                  value: "Brazil/East",
                  label: "Brazil/East",
                },
              ],
            },
            {
              value: "GMT-0",
              label: "GMT-0",
              children: [
                {
                  value: "America/Scoresbysund",
                  label: "America/Scoresbysund",
                },
                {
                  value: "Atlantic/Azores",
                  label: "Atlantic/Azores",
                },
              ],
            },
            {
              value: "GMT+1",
              label: "GMT+1",
              children: [
                {
                  value: "Africa/Casablanca",
                  label: "Africa/Casablanca",
                },
                {
                  value: "Africa/El_Aaiun",
                  label: "Africa/El_Aaiun",
                },
                {
                  value: "Atlantic/Canary",
                  label: "Atlantic/Canary",
                },
                {
                  value: "Atlantic/Faeroe",
                  label: "Atlantic/Faeroe",
                },
                {
                  value: "Atlantic/Faroe",
                  label: "Atlantic/Faroe",
                },
                {
                  value: "Atlantic/Madeira",
                  label: "Atlantic/Madeira",
                },
                {
                  value: "Eire",
                  label: "Eire",
                },
                {
                  value: "Europe/Belfast",
                  label: "Europe/Belfast",
                },
                {
                  value: "Europe/Dublin",
                  label: "Europe/Dublin",
                },
                {
                  value: "Europe/Guernsey",
                  label: "Europe/Guernsey",
                },
                {
                  value: "Europe/Isle_of_Man",
                  label: "Europe/Isle_of_Man",
                },
                {
                  value: "Europe/Jersey",
                  label: "Europe/Jersey",
                },
                {
                  value: "Europe/Lisbon",
                  label: "Europe/Lisbon",
                },
                {
                  value: "Europe/London",
                  label: "Europe/London",
                },
                {
                  value: "Portugal",
                  label: "Portugal",
                },
              ],
            },
            {
              value: "GMT+2",
              label: "GMT+2",
              children: [
                {
                  value: "Arctic/Longyearbyen",
                  label: "Arctic/Longyearbyen",
                },
                {
                  value: "Atlantic/Jan_Mayen",
                  label: "Atlantic/Jan_Mayen",
                },
                {
                  value: "Europe/Amsterdam",
                  label: "Europe/Amsterdam",
                },
                {
                  value: "Europe/Andorra",
                  label: "Europe/Andorra",
                },
                {
                  value: "Europe/Belgrade",
                  label: "Europe/Belgrade",
                },
                {
                  value: "Europe/Berlin",
                  label: "Europe/Berlin",
                },
                {
                  value: "Europe/Bratislava",
                  label: "Europe/Bratislava",
                },
                {
                  value: "Europe/Brussels",
                  label: "Europe/Brussels",
                },
                {
                  value: "Europe/Budapest",
                  label: "Europe/Budapest",
                },
                {
                  value: "Europe/Busingen",
                  label: "Europe/Busingen",
                },
                {
                  value: "Europe/Copenhagen",
                  label: "Europe/Copenhagen",
                },
                {
                  value: "Europe/Gibraltar",
                  label: "Europe/Gibraltar",
                },
                {
                  value: "Europe/Ljubljana",
                  label: "Europe/Ljubljana",
                },
                {
                  value: "Europe/Luxembourg",
                  label: "Europe/Luxembourg",
                },
                {
                  value: "Europe/Madrid",
                  label: "Europe/Madrid",
                },
                {
                  value: "Europe/Malta",
                  label: "Europe/Malta",
                },
                {
                  value: "Europe/Monaco",
                  label: "Europe/Monaco",
                },
                {
                  value: "Europe/Oslo",
                  label: "Europe/Oslo",
                },
                {
                  value: "Europe/Paris",
                  label: "Europe/Paris",
                },
                {
                  value: "Europe/Podgorica",
                  label: "Europe/Podgorica",
                },
                {
                  value: "Europe/Prague",
                  label: "Europe/Prague",
                },
                {
                  value: "Europe/Rome",
                  label: "Europe/Rome",
                },
                {
                  value: "Europe/San_Marino",
                  label: "Europe/San_Marino",
                },
                {
                  value: "Europe/Sarajevo",
                  label: "Europe/Sarajevo",
                },
                {
                  value: "Europe/Skopje",
                  label: "Europe/Skopje",
                },
                {
                  value: "Europe/Stockholm",
                  label: "Europe/Stockholm",
                },
                {
                  value: "Europe/Tirane",
                  label: "Europe/Tirane",
                },
                {
                  value: "Europe/Vaduz",
                  label: "Europe/Vaduz",
                },
                {
                  value: "Europe/Vatican",
                  label: "Europe/Vatican",
                },
                {
                  value: "Europe/Vienna",
                  label: "Europe/Vienna",
                },
                {
                  value: "Europe/Warsaw",
                  label: "Europe/Warsaw",
                },
                {
                  value: "Europe/Zagreb",
                  label: "Europe/Zagreb",
                },
                {
                  value: "Europe/Zurich",
                  label: "Europe/Zurich",
                },
                {
                  value: "Poland",
                  label: "Poland",
                },
              ],
            },
            {
              value: "GMT+3",
              label: "GMT+3",
              children: [
                {
                  value: "Asia/Amman",
                  label: "Asia/Amman",
                },
                {
                  value: "Asia/Beirut",
                  label: "Asia/Beirut",
                },
                {
                  value: "Asia/Damascus",
                  label: "Asia/Damascus",
                },
                {
                  value: "Asia/Famagusta",
                  label: "Asia/Famagusta",
                },
                {
                  value: "Asia/Gaza",
                  label: "Asia/Gaza",
                },
                {
                  value: "Asia/Hebron",
                  label: "Asia/Hebron",
                },
                {
                  value: "Asia/Jerusalem",
                  label: "Asia/Jerusalem",
                },
                {
                  value: "Asia/Nicosia",
                  label: "Asia/Nicosia",
                },
                {
                  value: "Asia/Tel_Aviv",
                  label: "Asia/Tel_Aviv",
                },
                {
                  value: "Europe/Athens",
                  label: "Europe/Athens",
                },
                {
                  value: "Europe/Bucharest",
                  label: "Europe/Bucharest",
                },
                {
                  value: "Europe/Chisinau",
                  label: "Europe/Chisinau",
                },
                {
                  value: "Europe/Helsinki",
                  label: "Europe/Helsinki",
                },
                {
                  value: "Europe/Kiev",
                  label: "Europe/Kiev",
                },
                {
                  value: "Europe/Mariehamn",
                  label: "Europe/Mariehamn",
                },
                {
                  value: "Europe/Nicosia",
                  label: "Europe/Nicosia",
                },
                {
                  value: "Europe/Riga",
                  label: "Europe/Riga",
                },
                {
                  value: "Europe/Sofia",
                  label: "Europe/Sofia",
                },
                {
                  value: "Europe/Tallinn",
                  label: "Europe/Tallinn",
                },
                {
                  value: "Europe/Tiraspol",
                  label: "Europe/Tiraspol",
                },
                {
                  value: "Europe/Uzhgorod",
                  label: "Europe/Uzhgorod",
                },
                {
                  value: "Europe/Vilnius",
                  label: "Europe/Vilnius",
                },
                {
                  value: "Europe/Zaporozhye",
                  label: "Europe/Zaporozhye",
                },
                {
                  value: "Israel",
                  label: "Israel",
                },
              ],
            },
            {
              value: "GMT+4:30",
              label: "GMT+4:30",
              children: [
                {
                  value: "Asia/Tehran",
                  label: "Asia/Tehran",
                },
                {
                  value: "Iran",
                  label: "Iran",
                },
              ],
            },
            {
              value: "GMT+10:30",
              label: "GMT+10:30",
              children: [
                {
                  value: "Australia/Adelaide",
                  label: "Australia/Adelaide",
                },
                {
                  value: "Australia/Broken_Hill",
                  label: "Australia/Broken_Hill",
                },
                {
                  value: "Australia/Darwin",
                  label: "Australia/Darwin",
                },
                {
                  value: "Australia/South",
                  label: "Australia/South",
                },
                {
                  value: "Australia/Yancowinna",
                  label: "Australia/Yancowinna",
                },
              ],
            },
            {
              value: "GMT+11",
              label: "GMT+11",
              children: [
                {
                  value: "Australia/ACT",
                  label: "Australia/ACT",
                },
                {
                  value: "Australia/Canberra",
                  label: "Australia/Canberra",
                },
                {
                  value: "Australia/Currie",
                  label: "Australia/Currie",
                },
                {
                  value: "Australia/Hobart",
                  label: "Australia/Hobart",
                },
                {
                  value: "Australia/Melbourne",
                  label: "Australia/Melbourne",
                },
                {
                  value: "Australia/NSW",
                  label: "Australia/NSW",
                },
                {
                  value: "Australia/Sydney",
                  label: "Australia/Sydney",
                },
                {
                  value: "Australia/Tasmania",
                  label: "Australia/Tasmania",
                },
                {
                  value: "Australia/Victoria",
                  label: "Australia/Victoria",
                },
                {
                  value: "Australia/LHI",
                  label: "Australia/LHI",
                },
                {
                  value: "Australia/Lord_Howe",
                  label: "Australia/Lord_Howe",
                },
              ],
            },
            {
              value: "GMT+13",
              label: "GMT+13",
              children: [
                {
                  value: "Antarctica/McMurdo",
                  label: "Antarctica/McMurdo",
                },
                {
                  value: "Antarctica/South_Pole",
                  label: "Antarctica/South_Pole",
                },
                {
                  value: "Pacific/Auckland",
                  label: "Pacific/Auckland",
                },
                {
                  value: "Pacific/Fiji",
                  label: "Pacific/Fiji",
                },
              ],
            },
            {
              value: "GMT+13:45",
              label: "GMT+13:45",
              children: [
                {
                  value: "Pacific/Chatham",
                  label: "Pacific/Chatham",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
