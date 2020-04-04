type Codes = {
  slug: string;
  name: string;
  alpha2: string;
}

export const isoA2 = (countrySlug: string, countryName: string): string => {
  const countryCode = countryCodes.find(({ slug, name}) => name === countryName || slug === countrySlug);

  if (!countryCode) {
    console.error('Country code not found for', countrySlug, countryName);
    return '??';
  }

  return countryCode.alpha2;
};

const countryCodes: Codes[] = [
  {
    "slug": "afghanistan",
    "name": "Afghanistan",
    "alpha2": "AF"
  },
  {
    "slug": "aland-islands",
    "name": "Åland Islands",
    "alpha2": "AX"
  },
  {
    "slug": "albania",
    "name": "Albania",
    "alpha2": "AL"
  },
  {
    "slug": "algeria",
    "name": "Algeria",
    "alpha2": "DZ"
  },
  {
    "slug": "american-samoa",
    "name": "American Samoa",
    "alpha2": "AS"
  },
  {
    "slug": "andorra",
    "name": "Andorra",
    "alpha2": "AD"
  },
  {
    "slug": "angola",
    "name": "Angola",
    "alpha2": "AO"
  },
  {
    "slug": "anguilla",
    "name": "Anguilla",
    "alpha2": "AI"
  },
  {
    "slug": "antarctica",
    "name": "Antarctica",
    "alpha2": "AQ"
  },
  {
    "slug": "antigua-and-barbuda",
    "name": "Antigua and Barbuda",
    "alpha2": "AG"
  },
  {
    "slug": "argentina",
    "name": "Argentina",
    "alpha2": "AR"
  },
  {
    "slug": "armenia",
    "name": "Armenia",
    "alpha2": "AM"
  },
  {
    "slug": "aruba",
    "name": "Aruba",
    "alpha2": "AW"
  },
  {
    "slug": "australia",
    "name": "Australia",
    "alpha2": "AU"
  },
  {
    "slug": "austria",
    "name": "Austria",
    "alpha2": "AT"
  },
  {
    "slug": "azerbaijan",
    "name": "Azerbaijan",
    "alpha2": "AZ"
  },
  {
    "slug": "bahamas",
    "name": "Bahamas",
    "alpha2": "BS"
  },
  {
    "slug": "the-bahamas",
    "name": "The Bahamas",
    "alpha2": "BS"
  },
  {
    "slug": "bahrain",
    "name": "Bahrain",
    "alpha2": "BH"
  },
  {
    "slug": "bangladesh",
    "name": "Bangladesh",
    "alpha2": "BD"
  },
  {
    "slug": "barbados",
    "name": "Barbados",
    "alpha2": "BB"
  },
  {
    "slug": "belarus",
    "name": "Belarus",
    "alpha2": "BY"
  },
  {
    "slug": "belgium",
    "name": "Belgium",
    "alpha2": "BE"
  },
  {
    "slug": "belize",
    "name": "Belize",
    "alpha2": "BZ"
  },
  {
    "slug": "benin",
    "name": "Benin",
    "alpha2": "BJ"
  },
  {
    "slug": "bermuda",
    "name": "Bermuda",
    "alpha2": "BM"
  },
  {
    "slug": "bhutan",
    "name": "Bhutan",
    "alpha2": "BT"
  },
  {
    "slug": "bolivia-plurinational-state-of",
    "name": "Bolivia (Plurinational State of)",
    "alpha2": "BO"
  },
  {
    "slug": "bolivia",
    "name": "Bolivia",
    "alpha2": "BO"
  },
  {
    "slug": "bonaire-sint-eustatius-and-saba",
    "name": "Bonaire, Sint Eustatius and Saba",
    "alpha2": "BQ"
  },
  {
    "slug": "bosnia-and-herzegovina",
    "name": "Bosnia and Herzegovina",
    "alpha2": "BA"
  },
  {
    "slug": "botswana",
    "name": "Botswana",
    "alpha2": "BW"
  },
  {
    "slug": "bouvet-island",
    "name": "Bouvet Island",
    "alpha2": "BV"
  },
  {
    "slug": "brazil",
    "name": "Brazil",
    "alpha2": "BR"
  },
  {
    "slug": "british-indian-ocean-territory",
    "name": "British Indian Ocean Territory",
    "alpha2": "IO"
  },
  {
    "slug": "brunei-darussalam",
    "name": "Brunei Darussalam",
    "alpha2": "BN"
  },
  {
    "slug": "brunei",
    "name": "Brunei",
    "alpha2": "BN"
  },
  {
    "slug": "bulgaria",
    "name": "Bulgaria",
    "alpha2": "BG"
  },
  {
    "slug": "burkina-faso",
    "name": "Burkina Faso",
    "alpha2": "BF"
  },
  {
    "slug": "burundi",
    "name": "Burundi",
    "alpha2": "BI"
  },
  {
    "slug": "cabo-verde",
    "name": "Cabo Verde",
    "alpha2": "CV"
  },
  {
    "slug": "cambodia",
    "name": "Cambodia",
    "alpha2": "KH"
  },
  {
    "slug": "cameroon",
    "name": "Cameroon",
    "alpha2": "CM"
  },
  {
    "slug": "canada",
    "name": "Canada",
    "alpha2": "CA"
  },
  {
    "slug": "cayman-islands",
    "name": "Cayman Islands",
    "alpha2": "KY"
  },
  {
    "slug": "central-african-republic",
    "name": "Central African Republic",
    "alpha2": "CF"
  },
  {
    "slug": "chad",
    "name": "Chad",
    "alpha2": "TD"
  },
  {
    "slug": "chile",
    "name": "Chile",
    "alpha2": "CL"
  },
  {
    "slug": "china",
    "name": "China",
    "alpha2": "CN"
  },
  {
    "slug": "christmas-island",
    "name": "Christmas Island",
    "alpha2": "CX"
  },
  {
    "slug": "cocos-keeling-islands",
    "name": "Cocos (Keeling) Islands",
    "alpha2": "CC"
  },
  {
    "slug": "colombia",
    "name": "Colombia",
    "alpha2": "CO"
  },
  {
    "slug": "comoros",
    "name": "Comoros",
    "alpha2": "KM"
  },
  {
    "slug": "congo",
    "name": "Congo",
    "alpha2": "CG"
  },
  {
    "slug": "congo-(Brazzaville)",
    "name": "Congo (Brazzaville)",
    "alpha2": "CG"
  },
  {
    "slug": "congo-(kinshasa)",
    "name": "Congo (Kinshasa)",
    "alpha2": "CD"
  },
  {
    "slug": "congo-democratic-republic-of-the",
    "name": "Congo, Democratic Republic of the",
    "alpha2": "CD"
  },
  {
    "slug": "cook-islands",
    "name": "Cook Islands",
    "alpha2": "CK"
  },
  {
    "slug": "costa-rica",
    "name": "Costa Rica",
    "alpha2": "CR"
  },
  {
    "slug": "cote-divoire",
    "name": "Cote d'Ivoire",
    "alpha2": "CI"
  },
  {
    "slug": "croatia",
    "name": "Croatia",
    "alpha2": "HR"
  },
  {
    "slug": "cuba",
    "name": "Cuba",
    "alpha2": "CU"
  },
  {
    "slug": "curacao",
    "name": "Curaçao",
    "alpha2": "CW"
  },
  {
    "slug": "cyprus",
    "name": "Cyprus",
    "alpha2": "CY"
  },
  {
    "slug": "czechia",
    "name": "Czechia",
    "alpha2": "CZ"
  },
  {
    "slug": "denmark",
    "name": "Denmark",
    "alpha2": "DK"
  },
  {
    "slug": "djibouti",
    "name": "Djibouti",
    "alpha2": "DJ"
  },
  {
    "slug": "dominica",
    "name": "Dominica",
    "alpha2": "DM"
  },
  {
    "slug": "dominican-republic",
    "name": "Dominican Republic",
    "alpha2": "DO"
  },
  {
    "slug": "ecuador",
    "name": "Ecuador",
    "alpha2": "EC"
  },
  {
    "slug": "egypt",
    "name": "Egypt",
    "alpha2": "EG"
  },
  {
    "slug": "el-salvador",
    "name": "El Salvador",
    "alpha2": "SV"
  },
  {
    "slug": "equatorial-guinea",
    "name": "Equatorial Guinea",
    "alpha2": "GQ"
  },
  {
    "slug": "eritrea",
    "name": "Eritrea",
    "alpha2": "ER"
  },
  {
    "slug": "estonia",
    "name": "Estonia",
    "alpha2": "EE"
  },
  {
    "slug": "eswatini",
    "name": "Eswatini",
    "alpha2": "SZ"
  },
  {
    "slug": "ethiopia",
    "name": "Ethiopia",
    "alpha2": "ET"
  },
  {
    "slug": "falkland-islands-malvinas",
    "name": "Falkland Islands (Malvinas)",
    "alpha2": "FK"
  },
  {
    "slug": "faroe-islands",
    "name": "Faroe Islands",
    "alpha2": "FO"
  },
  {
    "slug": "fiji",
    "name": "Fiji",
    "alpha2": "FJ"
  },
  {
    "slug": "finland",
    "name": "Finland",
    "alpha2": "FI"
  },
  {
    "slug": "france",
    "name": "France",
    "alpha2": "FR"
  },
  {
    "slug": "french-guiana",
    "name": "French Guiana",
    "alpha2": "GF"
  },
  {
    "slug": "french-polynesia",
    "name": "French Polynesia",
    "alpha2": "PF"
  },
  {
    "slug": "french-southern-territories",
    "name": "French Southern Territories",
    "alpha2": "TF"
  },
  {
    "slug": "gabon",
    "name": "Gabon",
    "alpha2": "GA"
  },
  {
    "slug": "gambia",
    "name": "Gambia",
    "alpha2": "GM"
  },
  {
    "slug": "gambia-the",
    "name": "Gambia, The",
    "alpha2": "GM"
  },
  {
    "slug": "georgia",
    "name": "Georgia",
    "alpha2": "GE"
  },
  {
    "slug": "germany",
    "name": "Germany",
    "alpha2": "DE"
  },
  {
    "slug": "ghana",
    "name": "Ghana",
    "alpha2": "GH"
  },
  {
    "slug": "gibraltar",
    "name": "Gibraltar",
    "alpha2": "GI"
  },
  {
    "slug": "greece",
    "name": "Greece",
    "alpha2": "GR"
  },
  {
    "slug": "greenland",
    "name": "Greenland",
    "alpha2": "GL"
  },
  {
    "slug": "grenada",
    "name": "Grenada",
    "alpha2": "GD"
  },
  {
    "slug": "guadeloupe",
    "name": "Guadeloupe",
    "alpha2": "GP"
  },
  {
    "slug": "guam",
    "name": "Guam",
    "alpha2": "GU"
  },
  {
    "slug": "guatemala",
    "name": "Guatemala",
    "alpha2": "GT"
  },
  {
    "slug": "guernsey",
    "name": "Guernsey",
    "alpha2": "GG"
  },
  {
    "slug": "guinea",
    "name": "Guinea",
    "alpha2": "GN"
  },
  {
    "slug": "guinea-bissau",
    "name": "Guinea-Bissau",
    "alpha2": "GW"
  },
  {
    "slug": "guyana",
    "name": "Guyana",
    "alpha2": "GY"
  },
  {
    "slug": "haiti",
    "name": "Haiti",
    "alpha2": "HT"
  },
  {
    "slug": "heard-island-and-mcdonald-islands",
    "name": "Heard Island and McDonald Islands",
    "alpha2": "HM"
  },
  {
    "slug": "holy-see",
    "name": "Holy See",
    "alpha2": "VA"
  },
  {
    "slug": "vatican-city",
    "name": "Vatican City",
    "alpha2": "VA"
  },
  {
    "slug": "honduras",
    "name": "Honduras",
    "alpha2": "HN"
  },
  {
    "slug": "hong-kong",
    "name": "Hong Kong",
    "alpha2": "HK"
  },
  {
    "slug": "hungary",
    "name": "Hungary",
    "alpha2": "HU"
  },
  {
    "slug": "iceland",
    "name": "Iceland",
    "alpha2": "IS"
  },
  {
    "slug": "india",
    "name": "India",
    "alpha2": "IN"
  },
  {
    "slug": "indonesia",
    "name": "Indonesia",
    "alpha2": "ID"
  },
  {
    "slug": "iran-islamic-republic-of",
    "name": "Iran (Islamic Republic of)",
    "alpha2": "IR"
  },
  {
    "slug": "iran",
    "name": "Iran",
    "alpha2": "IR"
  },
  {
    "slug": "iraq",
    "name": "Iraq",
    "alpha2": "IQ"
  },
  {
    "slug": "ireland",
    "name": "Ireland",
    "alpha2": "IE"
  },
  {
    "slug": "isle-of-man",
    "name": "Isle of Man",
    "alpha2": "IM"
  },
  {
    "slug": "israel",
    "name": "Israel",
    "alpha2": "IL"
  },
  {
    "slug": "italy",
    "name": "Italy",
    "alpha2": "IT"
  },
  {
    "slug": "jamaica",
    "name": "Jamaica",
    "alpha2": "JM"
  },
  {
    "slug": "japan",
    "name": "Japan",
    "alpha2": "JP"
  },
  {
    "slug": "jersey",
    "name": "Jersey",
    "alpha2": "JE"
  },
  {
    "slug": "jordan",
    "name": "Jordan",
    "alpha2": "JO"
  },
  {
    "slug": "kazakhstan",
    "name": "Kazakhstan",
    "alpha2": "KZ"
  },
  {
    "slug": "kenya",
    "name": "Kenya",
    "alpha2": "KE"
  },
  {
    "slug": "kiribati",
    "name": "Kiribati",
    "alpha2": "KI"
  },
  {
    "slug": "korea-democratic-peoples-republic-of",
    "name": "Korea (Democratic People's Republic of)",
    "alpha2": "KP"
  },
  {
    "slug": "korea-republic-of",
    "name": "Korea, Republic of",
    "alpha2": "KR"
  },
  {
    "slug": "korea-south",
    "name": "South Korea",
    "alpha2": "KR"
  },
  {
    "slug": "kuwait",
    "name": "Kuwait",
    "alpha2": "KW"
  },
  {
    "slug": "kyrgyzstan",
    "name": "Kyrgyzstan",
    "alpha2": "KG"
  },
  {
    "slug": "lao-peoples-democratic-republic",
    "name": "Lao People's Democratic Republic",
    "alpha2": "LA"
  },
  {
    "slug": "laos",
    "name": "Laos",
    "alpha2": "LA"
  },
  {
    "slug": "latvia",
    "name": "Latvia",
    "alpha2": "LV"
  },
  {
    "slug": "lebanon",
    "name": "Lebanon",
    "alpha2": "LB"
  },
  {
    "slug": "lesotho",
    "name": "Lesotho",
    "alpha2": "LS"
  },
  {
    "slug": "liberia",
    "name": "Liberia",
    "alpha2": "LR"
  },
  {
    "slug": "libya",
    "name": "Libya",
    "alpha2": "LY"
  },
  {
    "slug": "liechtenstein",
    "name": "Liechtenstein",
    "alpha2": "LI"
  },
  {
    "slug": "lithuania",
    "name": "Lithuania",
    "alpha2": "LT"
  },
  {
    "slug": "luxembourg",
    "name": "Luxembourg",
    "alpha2": "LU"
  },
  {
    "slug": "macao",
    "name": "Macao",
    "alpha2": "MO"
  },
  {
    "slug": "macau",
    "name": "Macau",
    "alpha2": "MO"
  },
  {
    "slug": "madagascar",
    "name": "Madagascar",
    "alpha2": "MG"
  },
  {
    "slug": "malawi",
    "name": "Malawi",
    "alpha2": "MW"
  },
  {
    "slug": "malaysia",
    "name": "Malaysia",
    "alpha2": "MY"
  },
  {
    "slug": "maldives",
    "name": "Maldives",
    "alpha2": "MV"
  },
  {
    "slug": "mali",
    "name": "Mali",
    "alpha2": "ML"
  },
  {
    "slug": "malta",
    "name": "Malta",
    "alpha2": "MT"
  },
  {
    "slug": "marshall-islands",
    "name": "Marshall Islands",
    "alpha2": "MH"
  },
  {
    "slug": "martinique",
    "name": "Martinique",
    "alpha2": "MQ"
  },
  {
    "slug": "mauritania",
    "name": "Mauritania",
    "alpha2": "MR"
  },
  {
    "slug": "mauritius",
    "name": "Mauritius",
    "alpha2": "MU"
  },
  {
    "slug": "mayotte",
    "name": "Mayotte",
    "alpha2": "YT"
  },
  {
    "slug": "mexico",
    "name": "Mexico",
    "alpha2": "MX"
  },
  {
    "slug": "micronesia-federated-states-of",
    "name": "Micronesia (Federated States of)",
    "alpha2": "FM"
  },
  {
    "slug": "moldova-republic-of",
    "name": "Moldova, Republic of",
    "alpha2": "MD"
  },
  {
    "slug": "moldova",
    "name": "Moldova",
    "alpha2": "MD"
  },
  {
    "slug": "monaco",
    "name": "Monaco",
    "alpha2": "MC"
  },
  {
    "slug": "mongolia",
    "name": "Mongolia",
    "alpha2": "MN"
  },
  {
    "slug": "montenegro",
    "name": "Montenegro",
    "alpha2": "ME"
  },
  {
    "slug": "montserrat",
    "name": "Montserrat",
    "alpha2": "MS"
  },
  {
    "slug": "morocco",
    "name": "Morocco",
    "alpha2": "MA"
  },
  {
    "slug": "mozambique",
    "name": "Mozambique",
    "alpha2": "MZ"
  },
  {
    "slug": "myanmar",
    "name": "Myanmar",
    "alpha2": "MM"
  },
  {
    "slug": "namibia",
    "name": "Namibia",
    "alpha2": "NA"
  },
  {
    "slug": "nauru",
    "name": "Nauru",
    "alpha2": "NR"
  },
  {
    "slug": "nepal",
    "name": "Nepal",
    "alpha2": "NP"
  },
  {
    "slug": "netherlands",
    "name": "Netherlands",
    "alpha2": "NL"
  },
  {
    "slug": "new-caledonia",
    "name": "New Caledonia",
    "alpha2": "NC"
  },
  {
    "slug": "new-zealand",
    "name": "New Zealand",
    "alpha2": "NZ"
  },
  {
    "slug": "nicaragua",
    "name": "Nicaragua",
    "alpha2": "NI"
  },
  {
    "slug": "niger",
    "name": "Niger",
    "alpha2": "NE"
  },
  {
    "slug": "nigeria",
    "name": "Nigeria",
    "alpha2": "NG"
  },
  {
    "slug": "niue",
    "name": "Niue",
    "alpha2": "NU"
  },
  {
    "slug": "norfolk-island",
    "name": "Norfolk Island",
    "alpha2": "NF"
  },
  {
    "slug": "north-macedonia",
    "name": "North Macedonia",
    "alpha2": "MK"
  },
  {
    "slug": "macedonia",
    "name": "Macedonia, Republic of ",
    "alpha2": "MK"
  },
  {
    "slug": "northern-mariana-islands",
    "name": "Northern Mariana Islands",
    "alpha2": "MP"
  },
  {
    "slug": "norway",
    "name": "Norway",
    "alpha2": "NO"
  },
  {
    "slug": "oman",
    "name": "Oman",
    "alpha2": "OM"
  },
  {
    "slug": "pakistan",
    "name": "Pakistan",
    "alpha2": "PK"
  },
  {
    "slug": "palau",
    "name": "Palau",
    "alpha2": "PW"
  },
  {
    "slug": "palestine-state-of",
    "name": "Palestine, State of",
    "alpha2": "PS"
  },
  {
    "slug": "palestine",
    "name": "Palestine",
    "alpha2": "PS"
  },
  {
    "slug": "panama",
    "name": "Panama",
    "alpha2": "PA"
  },
  {
    "slug": "papua-new-guinea",
    "name": "Papua New Guinea",
    "alpha2": "PG"
  },
  {
    "slug": "paraguay",
    "name": "Paraguay",
    "alpha2": "PY"
  },
  {
    "slug": "peru",
    "name": "Peru",
    "alpha2": "PE"
  },
  {
    "slug": "philippines",
    "name": "Philippines",
    "alpha2": "PH"
  },
  {
    "slug": "pitcairn",
    "name": "Pitcairn",
    "alpha2": "PN"
  },
  {
    "slug": "poland",
    "name": "Poland",
    "alpha2": "PL"
  },
  {
    "slug": "portugal",
    "name": "Portugal",
    "alpha2": "PT"
  },
  {
    "slug": "puerto-rico",
    "name": "Puerto Rico",
    "alpha2": "PR"
  },
  {
    "slug": "qatar",
    "name": "Qatar",
    "alpha2": "QA"
  },
  {
    "slug": "reunion",
    "name": "Réunion",
    "alpha2": "RE"
  },
  {
    "slug": "romania",
    "name": "Romania",
    "alpha2": "RO"
  },
  {
    "slug": "russian-federation",
    "name": "Russian Federation",
    "alpha2": "RU"
  },
  {
    "slug": "russia",
    "name": "Russia",
    "alpha2": "RU"
  },
  {
    "slug": "rwanda",
    "name": "Rwanda",
    "alpha2": "RW"
  },
  {
    "slug": "saint-barthelemy",
    "name": "Saint Barthélemy",
    "alpha2": "BL"
  },
  {
    "slug": "saint-helena-ascension-and-tristan-da-cunha",
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "alpha2": "SH"
  },
  {
    "slug": "saint-kitts-and-nevis",
    "name": "Saint Kitts and Nevis",
    "alpha2": "KN"
  },
  {
    "slug": "saint-lucia",
    "name": "Saint Lucia",
    "alpha2": "LC"
  },
  {
    "slug": "saint-martin-french-part",
    "name": "Saint Martin (French part)",
    "alpha2": "MF"
  },
  {
    "slug": "saint-pierre-and-miquelon",
    "name": "Saint Pierre and Miquelon",
    "alpha2": "PM"
  },
  {
    "slug": "saint-vincent-and-the-grenadines",
    "name": "Saint Vincent and the Grenadines",
    "alpha2": "VC"
  },
  {
    "slug": "samoa",
    "name": "Samoa",
    "alpha2": "WS"
  },
  {
    "slug": "san-marino",
    "name": "San Marino",
    "alpha2": "SM"
  },
  {
    "slug": "sao-tome-and-principe",
    "name": "Sao Tome and Principe",
    "alpha2": "ST"
  },
  {
    "slug": "saudi-arabia",
    "name": "Saudi Arabia",
    "alpha2": "SA"
  },
  {
    "slug": "senegal",
    "name": "Senegal",
    "alpha2": "SN"
  },
  {
    "slug": "serbia",
    "name": "Serbia",
    "alpha2": "RS"
  },
  {
    "slug": "seychelles",
    "name": "Seychelles",
    "alpha2": "SC"
  },
  {
    "slug": "sierra-leone",
    "name": "Sierra Leone",
    "alpha2": "SL"
  },
  {
    "slug": "singapore",
    "name": "Singapore",
    "alpha2": "SG"
  },
  {
    "slug": "sint-maarten-dutch-part",
    "name": "Sint Maarten (Dutch part)",
    "alpha2": "SX"
  },
  {
    "slug": "slovakia",
    "name": "Slovakia",
    "alpha2": "SK"
  },
  {
    "slug": "slovenia",
    "name": "Slovenia",
    "alpha2": "SI"
  },
  {
    "slug": "solomon-islands",
    "name": "Solomon Islands",
    "alpha2": "SB"
  },
  {
    "slug": "somalia",
    "name": "Somalia",
    "alpha2": "SO"
  },
  {
    "slug": "south-africa",
    "name": "South Africa",
    "alpha2": "ZA"
  },
  {
    "slug": "south-georgia-and-the-south-sandwich-islands",
    "name": "South Georgia and the South Sandwich Islands",
    "alpha2": "GS"
  },
  {
    "slug": "south-sudan",
    "name": "South Sudan",
    "alpha2": "SS"
  },
  {
    "slug": "spain",
    "name": "Spain",
    "alpha2": "ES"
  },
  {
    "slug": "sri-lanka",
    "name": "Sri Lanka",
    "alpha2": "LK"
  },
  {
    "slug": "sudan",
    "name": "Sudan",
    "alpha2": "SD"
  },
  {
    "slug": "suriname",
    "name": "Suriname",
    "alpha2": "SR"
  },
  {
    "slug": "svalbard-and-jan-mayen",
    "name": "Svalbard and Jan Mayen",
    "alpha2": "SJ"
  },
  {
    "slug": "sweden",
    "name": "Sweden",
    "alpha2": "SE"
  },
  {
    "slug": "switzerland",
    "name": "Switzerland",
    "alpha2": "CH"
  },
  {
    "slug": "syrian-arab-republic",
    "name": "Syrian Arab Republic",
    "alpha2": "SY"
  },
  {
    "slug": "syria",
    "name": "Syria",
    "alpha2": "SY"
  },
  {
    "slug": "taiwan-province-of-chinaa",
    "name": "Taiwan, Province of China[a]",
    "alpha2": "TW"
  },
  {
    "slug": "taiwan",
    "name": "Taiwan",
    "alpha2": "TW"
  },
  {
    "slug": "tajikistan",
    "name": "Tajikistan",
    "alpha2": "TJ"
  },
  {
    "slug": "tanzania-united-republic-of",
    "name": "Tanzania, United Republic of",
    "alpha2": "TZ"
  },
  {
    "slug": "tanzania",
    "name": "Tanzania",
    "alpha2": "TZ"
  },
  {
    "slug": "thailand",
    "name": "Thailand",
    "alpha2": "TH"
  },
  {
    "slug": "timor-leste",
    "name": "Timor-Leste",
    "alpha2": "TL"
  },
  {
    "slug": "togo",
    "name": "Togo",
    "alpha2": "TG"
  },
  {
    "slug": "tokelau",
    "name": "Tokelau",
    "alpha2": "TK"
  },
  {
    "slug": "tonga",
    "name": "Tonga",
    "alpha2": "TO"
  },
  {
    "slug": "trinidad-and-tobago",
    "name": "Trinidad and Tobago",
    "alpha2": "TT"
  },
  {
    "slug": "tunisia",
    "name": "Tunisia",
    "alpha2": "TN"
  },
  {
    "slug": "turkey",
    "name": "Turkey",
    "alpha2": "TR"
  },
  {
    "slug": "turkmenistan",
    "name": "Turkmenistan",
    "alpha2": "TM"
  },
  {
    "slug": "turks-and-caicos-islands",
    "name": "Turks and Caicos Islands",
    "alpha2": "TC"
  },
  {
    "slug": "tuvalu",
    "name": "Tuvalu",
    "alpha2": "TV"
  },
  {
    "slug": "uganda",
    "name": "Uganda",
    "alpha2": "UG"
  },
  {
    "slug": "ukraine",
    "name": "Ukraine",
    "alpha2": "UA"
  },
  {
    "slug": "united-arab-emirates",
    "name": "United Arab Emirates",
    "alpha2": "AE"
  },
  {
    "slug": "united-kingdom-of-great-britain-and-northern-ireland",
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "alpha2": "GB"
  },
  {
    "slug": "united-kingdom",
    "name": "United Kingdom",
    "alpha2": "GB"
  },
  {
    "slug": "united-states-of-america",
    "name": "United States of America",
    "alpha2": "US"
  },
  {
    "slug": "us",
    "name": "US",
    "alpha2": "US"
  },
  {
    "slug": "united-states-minor-outlying-islands",
    "name": "United States Minor Outlying Islands",
    "alpha2": "UM"
  },
  {
    "slug": "uruguay",
    "name": "Uruguay",
    "alpha2": "UY"
  },
  {
    "slug": "uzbekistan",
    "name": "Uzbekistan",
    "alpha2": "UZ"
  },
  {
    "slug": "vanuatu",
    "name": "Vanuatu",
    "alpha2": "VU"
  },
  {
    "slug": "venezuela-bolivarian-republic-of",
    "name": "Venezuela (Bolivarian Republic of)",
    "alpha2": "VE"
  },
  {
    "slug": "venezuela",
    "name": "Venezuela",
    "alpha2": "VE"
  },
  {
    "slug": "viet-nam",
    "name": "Viet Nam",
    "alpha2": "VN"
  },
  {
    "slug": "vietnam",
    "name": "Vietnam",
    "alpha2": "VN"
  },
  {
    "slug": "virgin-islands-british",
    "name": "Virgin Islands (British)",
    "alpha2": "VG"
  },
  {
    "slug": "virgin-islands-us",
    "name": "Virgin Islands (U.S.)",
    "alpha2": "VI"
  },
  {
    "slug": "wallis-and-futuna",
    "name": "Wallis and Futuna",
    "alpha2": "WF"
  },
  {
    "slug": "western-sahara",
    "name": "Western Sahara",
    "alpha2": "EH"
  },
  {
    "slug": "yemen",
    "name": "Yemen",
    "alpha2": "YE"
  },
  {
    "slug": "zambia",
    "name": "Zambia",
    "alpha2": "ZM"
  },
  {
    "slug": "zimbabwe",
    "name": "Zimbabwe",
    "alpha2": "ZW"
  }
];

export default isoA2;
