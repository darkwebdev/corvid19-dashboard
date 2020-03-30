type Codes = {
  slug: string;
  name: string;
  alpha2: string;
  alpha3: string;
  numerical: string;
  iso_3166_2: string;
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
    "alpha2": "AF",
    "alpha3": "AFG",
    "numerical": "004",
    "iso_3166_2": "ISO 3166-2:AF"
  },
  {
    "slug": "aland-islands",
    "name": "Åland Islands",
    "alpha2": "AX",
    "alpha3": "ALA",
    "numerical": "248",
    "iso_3166_2": "ISO 3166-2:AX"
  },
  {
    "slug": "albania",
    "name": "Albania",
    "alpha2": "AL",
    "alpha3": "ALB",
    "numerical": "008",
    "iso_3166_2": "ISO 3166-2:AL"
  },
  {
    "slug": "algeria",
    "name": "Algeria",
    "alpha2": "DZ",
    "alpha3": "DZA",
    "numerical": "012",
    "iso_3166_2": "ISO 3166-2:DZ"
  },
  {
    "slug": "american-samoa",
    "name": "American Samoa",
    "alpha2": "AS",
    "alpha3": "ASM",
    "numerical": "016",
    "iso_3166_2": "ISO 3166-2:AS"
  },
  {
    "slug": "andorra",
    "name": "Andorra",
    "alpha2": "AD",
    "alpha3": "AND",
    "numerical": "020",
    "iso_3166_2": "ISO 3166-2:AD"
  },
  {
    "slug": "angola",
    "name": "Angola",
    "alpha2": "AO",
    "alpha3": "AGO",
    "numerical": "024",
    "iso_3166_2": "ISO 3166-2:AO"
  },
  {
    "slug": "anguilla",
    "name": "Anguilla",
    "alpha2": "AI",
    "alpha3": "AIA",
    "numerical": "660",
    "iso_3166_2": "ISO 3166-2:AI"
  },
  {
    "slug": "antarctica",
    "name": "Antarctica",
    "alpha2": "AQ",
    "alpha3": "ATA",
    "numerical": "010",
    "iso_3166_2": "ISO 3166-2:AQ"
  },
  {
    "slug": "antigua-and-barbuda",
    "name": "Antigua and Barbuda",
    "alpha2": "AG",
    "alpha3": "ATG",
    "numerical": "028",
    "iso_3166_2": "ISO 3166-2:AG"
  },
  {
    "slug": "argentina",
    "name": "Argentina",
    "alpha2": "AR",
    "alpha3": "ARG",
    "numerical": "032",
    "iso_3166_2": "ISO 3166-2:AR"
  },
  {
    "slug": "armenia",
    "name": "Armenia",
    "alpha2": "AM",
    "alpha3": "ARM",
    "numerical": "051",
    "iso_3166_2": "ISO 3166-2:AM"
  },
  {
    "slug": "aruba",
    "name": "Aruba",
    "alpha2": "AW",
    "alpha3": "ABW",
    "numerical": "533",
    "iso_3166_2": "ISO 3166-2:AW"
  },
  {
    "slug": "australia",
    "name": "Australia",
    "alpha2": "AU",
    "alpha3": "AUS",
    "numerical": "036",
    "iso_3166_2": "ISO 3166-2:AU"
  },
  {
    "slug": "austria",
    "name": "Austria",
    "alpha2": "AT",
    "alpha3": "AUT",
    "numerical": "040",
    "iso_3166_2": "ISO 3166-2:AT"
  },
  {
    "slug": "azerbaijan",
    "name": "Azerbaijan",
    "alpha2": "AZ",
    "alpha3": "AZE",
    "numerical": "031",
    "iso_3166_2": "ISO 3166-2:AZ"
  },
  {
    "slug": "bahamas",
    "name": "Bahamas",
    "alpha2": "BS",
    "alpha3": "BHS",
    "numerical": "044",
    "iso_3166_2": "ISO 3166-2:BS"
  },
  {
    "slug": "the-bahamas",
    "name": "The Bahamas",
    "alpha2": "BS",
    "alpha3": "BHS",
    "numerical": "044",
    "iso_3166_2": "ISO 3166-2:BS"
  },
  {
    "slug": "bahrain",
    "name": "Bahrain",
    "alpha2": "BH",
    "alpha3": "BHR",
    "numerical": "048",
    "iso_3166_2": "ISO 3166-2:BH"
  },
  {
    "slug": "bangladesh",
    "name": "Bangladesh",
    "alpha2": "BD",
    "alpha3": "BGD",
    "numerical": "050",
    "iso_3166_2": "ISO 3166-2:BD"
  },
  {
    "slug": "barbados",
    "name": "Barbados",
    "alpha2": "BB",
    "alpha3": "BRB",
    "numerical": "052",
    "iso_3166_2": "ISO 3166-2:BB"
  },
  {
    "slug": "belarus",
    "name": "Belarus",
    "alpha2": "BY",
    "alpha3": "BLR",
    "numerical": "112",
    "iso_3166_2": "ISO 3166-2:BY"
  },
  {
    "slug": "belgium",
    "name": "Belgium",
    "alpha2": "BE",
    "alpha3": "BEL",
    "numerical": "056",
    "iso_3166_2": "ISO 3166-2:BE"
  },
  {
    "slug": "belize",
    "name": "Belize",
    "alpha2": "BZ",
    "alpha3": "BLZ",
    "numerical": "084",
    "iso_3166_2": "ISO 3166-2:BZ"
  },
  {
    "slug": "benin",
    "name": "Benin",
    "alpha2": "BJ",
    "alpha3": "BEN",
    "numerical": "204",
    "iso_3166_2": "ISO 3166-2:BJ"
  },
  {
    "slug": "bermuda",
    "name": "Bermuda",
    "alpha2": "BM",
    "alpha3": "BMU",
    "numerical": "060",
    "iso_3166_2": "ISO 3166-2:BM"
  },
  {
    "slug": "bhutan",
    "name": "Bhutan",
    "alpha2": "BT",
    "alpha3": "BTN",
    "numerical": "064",
    "iso_3166_2": "ISO 3166-2:BT"
  },
  {
    "slug": "bolivia-plurinational-state-of",
    "name": "Bolivia (Plurinational State of)",
    "alpha2": "BO",
    "alpha3": "BOL",
    "numerical": "068",
    "iso_3166_2": "ISO 3166-2:BO"
  },
  {
    "slug": "bolivia",
    "name": "Bolivia",
    "alpha2": "BO",
    "alpha3": "BOL",
    "numerical": "068",
    "iso_3166_2": "ISO 3166-2:BO"
  },
  {
    "slug": "bonaire-sint-eustatius-and-saba",
    "name": "Bonaire, Sint Eustatius and Saba",
    "alpha2": "BQ",
    "alpha3": "BES",
    "numerical": "535",
    "iso_3166_2": "ISO 3166-2:BQ"
  },
  {
    "slug": "bosnia-and-herzegovina",
    "name": "Bosnia and Herzegovina",
    "alpha2": "BA",
    "alpha3": "BIH",
    "numerical": "070",
    "iso_3166_2": "ISO 3166-2:BA"
  },
  {
    "slug": "botswana",
    "name": "Botswana",
    "alpha2": "BW",
    "alpha3": "BWA",
    "numerical": "072",
    "iso_3166_2": "ISO 3166-2:BW"
  },
  {
    "slug": "bouvet-island",
    "name": "Bouvet Island",
    "alpha2": "BV",
    "alpha3": "BVT",
    "numerical": "074",
    "iso_3166_2": "ISO 3166-2:BV"
  },
  {
    "slug": "brazil",
    "name": "Brazil",
    "alpha2": "BR",
    "alpha3": "BRA",
    "numerical": "076",
    "iso_3166_2": "ISO 3166-2:BR"
  },
  {
    "slug": "british-indian-ocean-territory",
    "name": "British Indian Ocean Territory",
    "alpha2": "IO",
    "alpha3": "IOT",
    "numerical": "086",
    "iso_3166_2": "ISO 3166-2:IO"
  },
  {
    "slug": "brunei-darussalam",
    "name": "Brunei Darussalam",
    "alpha2": "BN",
    "alpha3": "BRN",
    "numerical": "096",
    "iso_3166_2": "ISO 3166-2:BN"
  },
  {
    "slug": "brunei",
    "name": "Brunei",
    "alpha2": "BN",
    "alpha3": "BRN",
    "numerical": "096",
    "iso_3166_2": "ISO 3166-2:BN"
  },
  {
    "slug": "bulgaria",
    "name": "Bulgaria",
    "alpha2": "BG",
    "alpha3": "BGR",
    "numerical": "100",
    "iso_3166_2": "ISO 3166-2:BG"
  },
  {
    "slug": "burkina-faso",
    "name": "Burkina Faso",
    "alpha2": "BF",
    "alpha3": "BFA",
    "numerical": "854",
    "iso_3166_2": "ISO 3166-2:BF"
  },
  {
    "slug": "burundi",
    "name": "Burundi",
    "alpha2": "BI",
    "alpha3": "BDI",
    "numerical": "108",
    "iso_3166_2": "ISO 3166-2:BI"
  },
  {
    "slug": "cabo-verde",
    "name": "Cabo Verde",
    "alpha2": "CV",
    "alpha3": "CPV",
    "numerical": "132",
    "iso_3166_2": "ISO 3166-2:CV"
  },
  {
    "slug": "cambodia",
    "name": "Cambodia",
    "alpha2": "KH",
    "alpha3": "KHM",
    "numerical": "116",
    "iso_3166_2": "ISO 3166-2:KH"
  },
  {
    "slug": "cameroon",
    "name": "Cameroon",
    "alpha2": "CM",
    "alpha3": "CMR",
    "numerical": "120",
    "iso_3166_2": "ISO 3166-2:CM"
  },
  {
    "slug": "canada",
    "name": "Canada",
    "alpha2": "CA",
    "alpha3": "CAN",
    "numerical": "124",
    "iso_3166_2": "ISO 3166-2:CA"
  },
  {
    "slug": "cayman-islands",
    "name": "Cayman Islands",
    "alpha2": "KY",
    "alpha3": "CYM",
    "numerical": "136",
    "iso_3166_2": "ISO 3166-2:KY"
  },
  {
    "slug": "central-african-republic",
    "name": "Central African Republic",
    "alpha2": "CF",
    "alpha3": "CAF",
    "numerical": "140",
    "iso_3166_2": "ISO 3166-2:CF"
  },
  {
    "slug": "chad",
    "name": "Chad",
    "alpha2": "TD",
    "alpha3": "TCD",
    "numerical": "148",
    "iso_3166_2": "ISO 3166-2:TD"
  },
  {
    "slug": "chile",
    "name": "Chile",
    "alpha2": "CL",
    "alpha3": "CHL",
    "numerical": "152",
    "iso_3166_2": "ISO 3166-2:CL"
  },
  {
    "slug": "china",
    "name": "China",
    "alpha2": "CN",
    "alpha3": "CHN",
    "numerical": "156",
    "iso_3166_2": "ISO 3166-2:CN"
  },
  {
    "slug": "christmas-island",
    "name": "Christmas Island",
    "alpha2": "CX",
    "alpha3": "CXR",
    "numerical": "162",
    "iso_3166_2": "ISO 3166-2:CX"
  },
  {
    "slug": "cocos-keeling-islands",
    "name": "Cocos (Keeling) Islands",
    "alpha2": "CC",
    "alpha3": "CCK",
    "numerical": "166",
    "iso_3166_2": "ISO 3166-2:CC"
  },
  {
    "slug": "colombia",
    "name": "Colombia",
    "alpha2": "CO",
    "alpha3": "COL",
    "numerical": "170",
    "iso_3166_2": "ISO 3166-2:CO"
  },
  {
    "slug": "comoros",
    "name": "Comoros",
    "alpha2": "KM",
    "alpha3": "COM",
    "numerical": "174",
    "iso_3166_2": "ISO 3166-2:KM"
  },
  {
    "slug": "congo",
    "name": "Congo",
    "alpha2": "CG",
    "alpha3": "COG",
    "numerical": "178",
    "iso_3166_2": "ISO 3166-2:CG"
  },
  {
    "slug": "congo-(Brazzaville)",
    "name": "Congo (Brazzaville)",
    "alpha2": "CG",
    "alpha3": "COG",
    "numerical": "178",
    "iso_3166_2": "ISO 3166-2:CG"
  },
  {
    "slug": "congo-(kinshasa)",
    "name": "Congo (Kinshasa)",
    "alpha2": "CD",
    "alpha3": "COD",
    "numerical": "180",
    "iso_3166_2": "ISO 3166-2:CD"
  },
  {
    "slug": "congo-democratic-republic-of-the",
    "name": "Congo, Democratic Republic of the",
    "alpha2": "CD",
    "alpha3": "COD",
    "numerical": "180",
    "iso_3166_2": "ISO 3166-2:CD"
  },
  {
    "slug": "cook-islands",
    "name": "Cook Islands",
    "alpha2": "CK",
    "alpha3": "COK",
    "numerical": "184",
    "iso_3166_2": "ISO 3166-2:CK"
  },
  {
    "slug": "costa-rica",
    "name": "Costa Rica",
    "alpha2": "CR",
    "alpha3": "CRI",
    "numerical": "188",
    "iso_3166_2": "ISO 3166-2:CR"
  },
  {
    "slug": "cote-divoire",
    "name": "Cote d'Ivoire",
    "alpha2": "CI",
    "alpha3": "CIV",
    "numerical": "384",
    "iso_3166_2": "ISO 3166-2:CI"
  },
  {
    "slug": "croatia",
    "name": "Croatia",
    "alpha2": "HR",
    "alpha3": "HRV",
    "numerical": "191",
    "iso_3166_2": "ISO 3166-2:HR"
  },
  {
    "slug": "cuba",
    "name": "Cuba",
    "alpha2": "CU",
    "alpha3": "CUB",
    "numerical": "192",
    "iso_3166_2": "ISO 3166-2:CU"
  },
  {
    "slug": "curacao",
    "name": "Curaçao",
    "alpha2": "CW",
    "alpha3": "CUW",
    "numerical": "531",
    "iso_3166_2": "ISO 3166-2:CW"
  },
  {
    "slug": "cyprus",
    "name": "Cyprus",
    "alpha2": "CY",
    "alpha3": "CYP",
    "numerical": "196",
    "iso_3166_2": "ISO 3166-2:CY"
  },
  {
    "slug": "czechia",
    "name": "Czechia",
    "alpha2": "CZ",
    "alpha3": "CZE",
    "numerical": "203",
    "iso_3166_2": "ISO 3166-2:CZ"
  },
  {
    "slug": "denmark",
    "name": "Denmark",
    "alpha2": "DK",
    "alpha3": "DNK",
    "numerical": "208",
    "iso_3166_2": "ISO 3166-2:DK"
  },
  {
    "slug": "djibouti",
    "name": "Djibouti",
    "alpha2": "DJ",
    "alpha3": "DJI",
    "numerical": "262",
    "iso_3166_2": "ISO 3166-2:DJ"
  },
  {
    "slug": "dominica",
    "name": "Dominica",
    "alpha2": "DM",
    "alpha3": "DMA",
    "numerical": "212",
    "iso_3166_2": "ISO 3166-2:DM"
  },
  {
    "slug": "dominican-republic",
    "name": "Dominican Republic",
    "alpha2": "DO",
    "alpha3": "DOM",
    "numerical": "214",
    "iso_3166_2": "ISO 3166-2:DO"
  },
  {
    "slug": "ecuador",
    "name": "Ecuador",
    "alpha2": "EC",
    "alpha3": "ECU",
    "numerical": "218",
    "iso_3166_2": "ISO 3166-2:EC"
  },
  {
    "slug": "egypt",
    "name": "Egypt",
    "alpha2": "EG",
    "alpha3": "EGY",
    "numerical": "818",
    "iso_3166_2": "ISO 3166-2:EG"
  },
  {
    "slug": "el-salvador",
    "name": "El Salvador",
    "alpha2": "SV",
    "alpha3": "SLV",
    "numerical": "222",
    "iso_3166_2": "ISO 3166-2:SV"
  },
  {
    "slug": "equatorial-guinea",
    "name": "Equatorial Guinea",
    "alpha2": "GQ",
    "alpha3": "GNQ",
    "numerical": "226",
    "iso_3166_2": "ISO 3166-2:GQ"
  },
  {
    "slug": "eritrea",
    "name": "Eritrea",
    "alpha2": "ER",
    "alpha3": "ERI",
    "numerical": "232",
    "iso_3166_2": "ISO 3166-2:ER"
  },
  {
    "slug": "estonia",
    "name": "Estonia",
    "alpha2": "EE",
    "alpha3": "EST",
    "numerical": "233",
    "iso_3166_2": "ISO 3166-2:EE"
  },
  {
    "slug": "eswatini",
    "name": "Eswatini",
    "alpha2": "SZ",
    "alpha3": "SWZ",
    "numerical": "748",
    "iso_3166_2": "ISO 3166-2:SZ"
  },
  {
    "slug": "ethiopia",
    "name": "Ethiopia",
    "alpha2": "ET",
    "alpha3": "ETH",
    "numerical": "231",
    "iso_3166_2": "ISO 3166-2:ET"
  },
  {
    "slug": "falkland-islands-malvinas",
    "name": "Falkland Islands (Malvinas)",
    "alpha2": "FK",
    "alpha3": "FLK",
    "numerical": "238",
    "iso_3166_2": "ISO 3166-2:FK"
  },
  {
    "slug": "faroe-islands",
    "name": "Faroe Islands",
    "alpha2": "FO",
    "alpha3": "FRO",
    "numerical": "234",
    "iso_3166_2": "ISO 3166-2:FO"
  },
  {
    "slug": "fiji",
    "name": "Fiji",
    "alpha2": "FJ",
    "alpha3": "FJI",
    "numerical": "242",
    "iso_3166_2": "ISO 3166-2:FJ"
  },
  {
    "slug": "finland",
    "name": "Finland",
    "alpha2": "FI",
    "alpha3": "FIN",
    "numerical": "246",
    "iso_3166_2": "ISO 3166-2:FI"
  },
  {
    "slug": "france",
    "name": "France",
    "alpha2": "FR",
    "alpha3": "FRA",
    "numerical": "250",
    "iso_3166_2": "ISO 3166-2:FR"
  },
  {
    "slug": "french-guiana",
    "name": "French Guiana",
    "alpha2": "GF",
    "alpha3": "GUF",
    "numerical": "254",
    "iso_3166_2": "ISO 3166-2:GF"
  },
  {
    "slug": "french-polynesia",
    "name": "French Polynesia",
    "alpha2": "PF",
    "alpha3": "PYF",
    "numerical": "258",
    "iso_3166_2": "ISO 3166-2:PF"
  },
  {
    "slug": "french-southern-territories",
    "name": "French Southern Territories",
    "alpha2": "TF",
    "alpha3": "ATF",
    "numerical": "260",
    "iso_3166_2": "ISO 3166-2:TF"
  },
  {
    "slug": "gabon",
    "name": "Gabon",
    "alpha2": "GA",
    "alpha3": "GAB",
    "numerical": "266",
    "iso_3166_2": "ISO 3166-2:GA"
  },
  {
    "slug": "gambia",
    "name": "Gambia",
    "alpha2": "GM",
    "alpha3": "GMB",
    "numerical": "270",
    "iso_3166_2": "ISO 3166-2:GM"
  },
  {
    "slug": "gambia-the",
    "name": "Gambia, The",
    "alpha2": "GM",
    "alpha3": "GMB",
    "numerical": "270",
    "iso_3166_2": "ISO 3166-2:GM"
  },
  {
    "slug": "georgia",
    "name": "Georgia",
    "alpha2": "GE",
    "alpha3": "GEO",
    "numerical": "268",
    "iso_3166_2": "ISO 3166-2:GE"
  },
  {
    "slug": "germany",
    "name": "Germany",
    "alpha2": "DE",
    "alpha3": "DEU",
    "numerical": "276",
    "iso_3166_2": "ISO 3166-2:DE"
  },
  {
    "slug": "ghana",
    "name": "Ghana",
    "alpha2": "GH",
    "alpha3": "GHA",
    "numerical": "288",
    "iso_3166_2": "ISO 3166-2:GH"
  },
  {
    "slug": "gibraltar",
    "name": "Gibraltar",
    "alpha2": "GI",
    "alpha3": "GIB",
    "numerical": "292",
    "iso_3166_2": "ISO 3166-2:GI"
  },
  {
    "slug": "greece",
    "name": "Greece",
    "alpha2": "GR",
    "alpha3": "GRC",
    "numerical": "300",
    "iso_3166_2": "ISO 3166-2:GR"
  },
  {
    "slug": "greenland",
    "name": "Greenland",
    "alpha2": "GL",
    "alpha3": "GRL",
    "numerical": "304",
    "iso_3166_2": "ISO 3166-2:GL"
  },
  {
    "slug": "grenada",
    "name": "Grenada",
    "alpha2": "GD",
    "alpha3": "GRD",
    "numerical": "308",
    "iso_3166_2": "ISO 3166-2:GD"
  },
  {
    "slug": "guadeloupe",
    "name": "Guadeloupe",
    "alpha2": "GP",
    "alpha3": "GLP",
    "numerical": "312",
    "iso_3166_2": "ISO 3166-2:GP"
  },
  {
    "slug": "guam",
    "name": "Guam",
    "alpha2": "GU",
    "alpha3": "GUM",
    "numerical": "316",
    "iso_3166_2": "ISO 3166-2:GU"
  },
  {
    "slug": "guatemala",
    "name": "Guatemala",
    "alpha2": "GT",
    "alpha3": "GTM",
    "numerical": "320",
    "iso_3166_2": "ISO 3166-2:GT"
  },
  {
    "slug": "guernsey",
    "name": "Guernsey",
    "alpha2": "GG",
    "alpha3": "GGY",
    "numerical": "831",
    "iso_3166_2": "ISO 3166-2:GG"
  },
  {
    "slug": "guinea",
    "name": "Guinea",
    "alpha2": "GN",
    "alpha3": "GIN",
    "numerical": "324",
    "iso_3166_2": "ISO 3166-2:GN"
  },
  {
    "slug": "guinea-bissau",
    "name": "Guinea-Bissau",
    "alpha2": "GW",
    "alpha3": "GNB",
    "numerical": "624",
    "iso_3166_2": "ISO 3166-2:GW"
  },
  {
    "slug": "guyana",
    "name": "Guyana",
    "alpha2": "GY",
    "alpha3": "GUY",
    "numerical": "328",
    "iso_3166_2": "ISO 3166-2:GY"
  },
  {
    "slug": "haiti",
    "name": "Haiti",
    "alpha2": "HT",
    "alpha3": "HTI",
    "numerical": "332",
    "iso_3166_2": "ISO 3166-2:HT"
  },
  {
    "slug": "heard-island-and-mcdonald-islands",
    "name": "Heard Island and McDonald Islands",
    "alpha2": "HM",
    "alpha3": "HMD",
    "numerical": "334",
    "iso_3166_2": "ISO 3166-2:HM"
  },
  {
    "slug": "holy-see",
    "name": "Holy See",
    "alpha2": "VA",
    "alpha3": "VAT",
    "numerical": "336",
    "iso_3166_2": "ISO 3166-2:VA"
  },
  {
    "slug": "vatican-city",
    "name": "Vatican City",
    "alpha2": "VA",
    "alpha3": "VAT",
    "numerical": "336",
    "iso_3166_2": "ISO 3166-2:VA"
  },
  {
    "slug": "honduras",
    "name": "Honduras",
    "alpha2": "HN",
    "alpha3": "HND",
    "numerical": "340",
    "iso_3166_2": "ISO 3166-2:HN"
  },
  {
    "slug": "hong-kong",
    "name": "Hong Kong",
    "alpha2": "HK",
    "alpha3": "HKG",
    "numerical": "344",
    "iso_3166_2": "ISO 3166-2:HK"
  },
  {
    "slug": "hungary",
    "name": "Hungary",
    "alpha2": "HU",
    "alpha3": "HUN",
    "numerical": "348",
    "iso_3166_2": "ISO 3166-2:HU"
  },
  {
    "slug": "iceland",
    "name": "Iceland",
    "alpha2": "IS",
    "alpha3": "ISL",
    "numerical": "352",
    "iso_3166_2": "ISO 3166-2:IS"
  },
  {
    "slug": "india",
    "name": "India",
    "alpha2": "IN",
    "alpha3": "IND",
    "numerical": "356",
    "iso_3166_2": "ISO 3166-2:IN"
  },
  {
    "slug": "indonesia",
    "name": "Indonesia",
    "alpha2": "ID",
    "alpha3": "IDN",
    "numerical": "360",
    "iso_3166_2": "ISO 3166-2:ID"
  },
  {
    "slug": "iran-islamic-republic-of",
    "name": "Iran (Islamic Republic of)",
    "alpha2": "IR",
    "alpha3": "IRN",
    "numerical": "364",
    "iso_3166_2": "ISO 3166-2:IR"
  },
  {
    "slug": "iran",
    "name": "Iran",
    "alpha2": "IR",
    "alpha3": "IRN",
    "numerical": "364",
    "iso_3166_2": "ISO 3166-2:IR"
  },
  {
    "slug": "iraq",
    "name": "Iraq",
    "alpha2": "IQ",
    "alpha3": "IRQ",
    "numerical": "368",
    "iso_3166_2": "ISO 3166-2:IQ"
  },
  {
    "slug": "ireland",
    "name": "Ireland",
    "alpha2": "IE",
    "alpha3": "IRL",
    "numerical": "372",
    "iso_3166_2": "ISO 3166-2:IE"
  },
  {
    "slug": "isle-of-man",
    "name": "Isle of Man",
    "alpha2": "IM",
    "alpha3": "IMN",
    "numerical": "833",
    "iso_3166_2": "ISO 3166-2:IM"
  },
  {
    "slug": "israel",
    "name": "Israel",
    "alpha2": "IL",
    "alpha3": "ISR",
    "numerical": "376",
    "iso_3166_2": "ISO 3166-2:IL"
  },
  {
    "slug": "italy",
    "name": "Italy",
    "alpha2": "IT",
    "alpha3": "ITA",
    "numerical": "380",
    "iso_3166_2": "ISO 3166-2:IT"
  },
  {
    "slug": "jamaica",
    "name": "Jamaica",
    "alpha2": "JM",
    "alpha3": "JAM",
    "numerical": "388",
    "iso_3166_2": "ISO 3166-2:JM"
  },
  {
    "slug": "japan",
    "name": "Japan",
    "alpha2": "JP",
    "alpha3": "JPN",
    "numerical": "392",
    "iso_3166_2": "ISO 3166-2:JP"
  },
  {
    "slug": "jersey",
    "name": "Jersey",
    "alpha2": "JE",
    "alpha3": "JEY",
    "numerical": "832",
    "iso_3166_2": "ISO 3166-2:JE"
  },
  {
    "slug": "jordan",
    "name": "Jordan",
    "alpha2": "JO",
    "alpha3": "JOR",
    "numerical": "400",
    "iso_3166_2": "ISO 3166-2:JO"
  },
  {
    "slug": "kazakhstan",
    "name": "Kazakhstan",
    "alpha2": "KZ",
    "alpha3": "KAZ",
    "numerical": "398",
    "iso_3166_2": "ISO 3166-2:KZ"
  },
  {
    "slug": "kenya",
    "name": "Kenya",
    "alpha2": "KE",
    "alpha3": "KEN",
    "numerical": "404",
    "iso_3166_2": "ISO 3166-2:KE"
  },
  {
    "slug": "kiribati",
    "name": "Kiribati",
    "alpha2": "KI",
    "alpha3": "KIR",
    "numerical": "296",
    "iso_3166_2": "ISO 3166-2:KI"
  },
  {
    "slug": "korea-democratic-peoples-republic-of",
    "name": "Korea (Democratic People's Republic of)",
    "alpha2": "KP",
    "alpha3": "PRK",
    "numerical": "408",
    "iso_3166_2": "ISO 3166-2:KP"
  },
  {
    "slug": "korea-republic-of",
    "name": "Korea, Republic of",
    "alpha2": "KR",
    "alpha3": "KOR",
    "numerical": "410",
    "iso_3166_2": "ISO 3166-2:KR"
  },
  {
    "slug": "korea-south",
    "name": "South Korea",
    "alpha2": "KR",
    "alpha3": "KOR",
    "numerical": "410",
    "iso_3166_2": "ISO 3166-2:KR"
  },
  {
    "slug": "kuwait",
    "name": "Kuwait",
    "alpha2": "KW",
    "alpha3": "KWT",
    "numerical": "414",
    "iso_3166_2": "ISO 3166-2:KW"
  },
  {
    "slug": "kyrgyzstan",
    "name": "Kyrgyzstan",
    "alpha2": "KG",
    "alpha3": "KGZ",
    "numerical": "417",
    "iso_3166_2": "ISO 3166-2:KG"
  },
  {
    "slug": "lao-peoples-democratic-republic",
    "name": "Lao People's Democratic Republic",
    "alpha2": "LA",
    "alpha3": "LAO",
    "numerical": "418",
    "iso_3166_2": "ISO 3166-2:LA"
  },
  {
    "slug": "laos",
    "name": "Laos",
    "alpha2": "LA",
    "alpha3": "LAO",
    "numerical": "418",
    "iso_3166_2": "ISO 3166-2:LA"
  },
  {
    "slug": "latvia",
    "name": "Latvia",
    "alpha2": "LV",
    "alpha3": "LVA",
    "numerical": "428",
    "iso_3166_2": "ISO 3166-2:LV"
  },
  {
    "slug": "lebanon",
    "name": "Lebanon",
    "alpha2": "LB",
    "alpha3": "LBN",
    "numerical": "422",
    "iso_3166_2": "ISO 3166-2:LB"
  },
  {
    "slug": "lesotho",
    "name": "Lesotho",
    "alpha2": "LS",
    "alpha3": "LSO",
    "numerical": "426",
    "iso_3166_2": "ISO 3166-2:LS"
  },
  {
    "slug": "liberia",
    "name": "Liberia",
    "alpha2": "LR",
    "alpha3": "LBR",
    "numerical": "430",
    "iso_3166_2": "ISO 3166-2:LR"
  },
  {
    "slug": "libya",
    "name": "Libya",
    "alpha2": "LY",
    "alpha3": "LBY",
    "numerical": "434",
    "iso_3166_2": "ISO 3166-2:LY"
  },
  {
    "slug": "liechtenstein",
    "name": "Liechtenstein",
    "alpha2": "LI",
    "alpha3": "LIE",
    "numerical": "438",
    "iso_3166_2": "ISO 3166-2:LI"
  },
  {
    "slug": "lithuania",
    "name": "Lithuania",
    "alpha2": "LT",
    "alpha3": "LTU",
    "numerical": "440",
    "iso_3166_2": "ISO 3166-2:LT"
  },
  {
    "slug": "luxembourg",
    "name": "Luxembourg",
    "alpha2": "LU",
    "alpha3": "LUX",
    "numerical": "442",
    "iso_3166_2": "ISO 3166-2:LU"
  },
  {
    "slug": "macao",
    "name": "Macao",
    "alpha2": "MO",
    "alpha3": "MAC",
    "numerical": "446",
    "iso_3166_2": "ISO 3166-2:MO"
  },
  {
    "slug": "macau",
    "name": "Macau",
    "alpha2": "MO",
    "alpha3": "MAC",
    "numerical": "446",
    "iso_3166_2": "ISO 3166-2:MO"
  },
  {
    "slug": "madagascar",
    "name": "Madagascar",
    "alpha2": "MG",
    "alpha3": "MDG",
    "numerical": "450",
    "iso_3166_2": "ISO 3166-2:MG"
  },
  {
    "slug": "malawi",
    "name": "Malawi",
    "alpha2": "MW",
    "alpha3": "MWI",
    "numerical": "454",
    "iso_3166_2": "ISO 3166-2:MW"
  },
  {
    "slug": "malaysia",
    "name": "Malaysia",
    "alpha2": "MY",
    "alpha3": "MYS",
    "numerical": "458",
    "iso_3166_2": "ISO 3166-2:MY"
  },
  {
    "slug": "maldives",
    "name": "Maldives",
    "alpha2": "MV",
    "alpha3": "MDV",
    "numerical": "462",
    "iso_3166_2": "ISO 3166-2:MV"
  },
  {
    "slug": "mali",
    "name": "Mali",
    "alpha2": "ML",
    "alpha3": "MLI",
    "numerical": "466",
    "iso_3166_2": "ISO 3166-2:ML"
  },
  {
    "slug": "malta",
    "name": "Malta",
    "alpha2": "MT",
    "alpha3": "MLT",
    "numerical": "470",
    "iso_3166_2": "ISO 3166-2:MT"
  },
  {
    "slug": "marshall-islands",
    "name": "Marshall Islands",
    "alpha2": "MH",
    "alpha3": "MHL",
    "numerical": "584",
    "iso_3166_2": "ISO 3166-2:MH"
  },
  {
    "slug": "martinique",
    "name": "Martinique",
    "alpha2": "MQ",
    "alpha3": "MTQ",
    "numerical": "474",
    "iso_3166_2": "ISO 3166-2:MQ"
  },
  {
    "slug": "mauritania",
    "name": "Mauritania",
    "alpha2": "MR",
    "alpha3": "MRT",
    "numerical": "478",
    "iso_3166_2": "ISO 3166-2:MR"
  },
  {
    "slug": "mauritius",
    "name": "Mauritius",
    "alpha2": "MU",
    "alpha3": "MUS",
    "numerical": "480",
    "iso_3166_2": "ISO 3166-2:MU"
  },
  {
    "slug": "mayotte",
    "name": "Mayotte",
    "alpha2": "YT",
    "alpha3": "MYT",
    "numerical": "175",
    "iso_3166_2": "ISO 3166-2:YT"
  },
  {
    "slug": "mexico",
    "name": "Mexico",
    "alpha2": "MX",
    "alpha3": "MEX",
    "numerical": "484",
    "iso_3166_2": "ISO 3166-2:MX"
  },
  {
    "slug": "micronesia-federated-states-of",
    "name": "Micronesia (Federated States of)",
    "alpha2": "FM",
    "alpha3": "FSM",
    "numerical": "583",
    "iso_3166_2": "ISO 3166-2:FM"
  },
  {
    "slug": "moldova-republic-of",
    "name": "Moldova, Republic of",
    "alpha2": "MD",
    "alpha3": "MDA",
    "numerical": "498",
    "iso_3166_2": "ISO 3166-2:MD"
  },
  {
    "slug": "moldova",
    "name": "Moldova",
    "alpha2": "MD",
    "alpha3": "MDA",
    "numerical": "498",
    "iso_3166_2": "ISO 3166-2:MD"
  },
  {
    "slug": "monaco",
    "name": "Monaco",
    "alpha2": "MC",
    "alpha3": "MCO",
    "numerical": "492",
    "iso_3166_2": "ISO 3166-2:MC"
  },
  {
    "slug": "mongolia",
    "name": "Mongolia",
    "alpha2": "MN",
    "alpha3": "MNG",
    "numerical": "496",
    "iso_3166_2": "ISO 3166-2:MN"
  },
  {
    "slug": "montenegro",
    "name": "Montenegro",
    "alpha2": "ME",
    "alpha3": "MNE",
    "numerical": "499",
    "iso_3166_2": "ISO 3166-2:ME"
  },
  {
    "slug": "montserrat",
    "name": "Montserrat",
    "alpha2": "MS",
    "alpha3": "MSR",
    "numerical": "500",
    "iso_3166_2": "ISO 3166-2:MS"
  },
  {
    "slug": "morocco",
    "name": "Morocco",
    "alpha2": "MA",
    "alpha3": "MAR",
    "numerical": "504",
    "iso_3166_2": "ISO 3166-2:MA"
  },
  {
    "slug": "mozambique",
    "name": "Mozambique",
    "alpha2": "MZ",
    "alpha3": "MOZ",
    "numerical": "508",
    "iso_3166_2": "ISO 3166-2:MZ"
  },
  {
    "slug": "myanmar",
    "name": "Myanmar",
    "alpha2": "MM",
    "alpha3": "MMR",
    "numerical": "104",
    "iso_3166_2": "ISO 3166-2:MM"
  },
  {
    "slug": "namibia",
    "name": "Namibia",
    "alpha2": "NA",
    "alpha3": "NAM",
    "numerical": "516",
    "iso_3166_2": "ISO 3166-2:NA"
  },
  {
    "slug": "nauru",
    "name": "Nauru",
    "alpha2": "NR",
    "alpha3": "NRU",
    "numerical": "520",
    "iso_3166_2": "ISO 3166-2:NR"
  },
  {
    "slug": "nepal",
    "name": "Nepal",
    "alpha2": "NP",
    "alpha3": "NPL",
    "numerical": "524",
    "iso_3166_2": "ISO 3166-2:NP"
  },
  {
    "slug": "netherlands",
    "name": "Netherlands",
    "alpha2": "NL",
    "alpha3": "NLD",
    "numerical": "528",
    "iso_3166_2": "ISO 3166-2:NL"
  },
  {
    "slug": "new-caledonia",
    "name": "New Caledonia",
    "alpha2": "NC",
    "alpha3": "NCL",
    "numerical": "540",
    "iso_3166_2": "ISO 3166-2:NC"
  },
  {
    "slug": "new-zealand",
    "name": "New Zealand",
    "alpha2": "NZ",
    "alpha3": "NZL",
    "numerical": "554",
    "iso_3166_2": "ISO 3166-2:NZ"
  },
  {
    "slug": "nicaragua",
    "name": "Nicaragua",
    "alpha2": "NI",
    "alpha3": "NIC",
    "numerical": "558",
    "iso_3166_2": "ISO 3166-2:NI"
  },
  {
    "slug": "niger",
    "name": "Niger",
    "alpha2": "NE",
    "alpha3": "NER",
    "numerical": "562",
    "iso_3166_2": "ISO 3166-2:NE"
  },
  {
    "slug": "nigeria",
    "name": "Nigeria",
    "alpha2": "NG",
    "alpha3": "NGA",
    "numerical": "566",
    "iso_3166_2": "ISO 3166-2:NG"
  },
  {
    "slug": "niue",
    "name": "Niue",
    "alpha2": "NU",
    "alpha3": "NIU",
    "numerical": "570",
    "iso_3166_2": "ISO 3166-2:NU"
  },
  {
    "slug": "norfolk-island",
    "name": "Norfolk Island",
    "alpha2": "NF",
    "alpha3": "NFK",
    "numerical": "574",
    "iso_3166_2": "ISO 3166-2:NF"
  },
  {
    "slug": "north-macedonia",
    "name": "North Macedonia",
    "alpha2": "MK",
    "alpha3": "MKD",
    "numerical": "807",
    "iso_3166_2": "ISO 3166-2:MK"
  },
  {
    "slug": "northern-mariana-islands",
    "name": "Northern Mariana Islands",
    "alpha2": "MP",
    "alpha3": "MNP",
    "numerical": "580",
    "iso_3166_2": "ISO 3166-2:MP"
  },
  {
    "slug": "norway",
    "name": "Norway",
    "alpha2": "NO",
    "alpha3": "NOR",
    "numerical": "578",
    "iso_3166_2": "ISO 3166-2:NO"
  },
  {
    "slug": "oman",
    "name": "Oman",
    "alpha2": "OM",
    "alpha3": "OMN",
    "numerical": "512",
    "iso_3166_2": "ISO 3166-2:OM"
  },
  {
    "slug": "pakistan",
    "name": "Pakistan",
    "alpha2": "PK",
    "alpha3": "PAK",
    "numerical": "586",
    "iso_3166_2": "ISO 3166-2:PK"
  },
  {
    "slug": "palau",
    "name": "Palau",
    "alpha2": "PW",
    "alpha3": "PLW",
    "numerical": "585",
    "iso_3166_2": "ISO 3166-2:PW"
  },
  {
    "slug": "palestine-state-of",
    "name": "Palestine, State of",
    "alpha2": "PS",
    "alpha3": "PSE",
    "numerical": "275",
    "iso_3166_2": "ISO 3166-2:PS"
  },
  {
    "slug": "palestine",
    "name": "Palestine",
    "alpha2": "PS",
    "alpha3": "PSE",
    "numerical": "275",
    "iso_3166_2": "ISO 3166-2:PS"
  },
  {
    "slug": "panama",
    "name": "Panama",
    "alpha2": "PA",
    "alpha3": "PAN",
    "numerical": "591",
    "iso_3166_2": "ISO 3166-2:PA"
  },
  {
    "slug": "papua-new-guinea",
    "name": "Papua New Guinea",
    "alpha2": "PG",
    "alpha3": "PNG",
    "numerical": "598",
    "iso_3166_2": "ISO 3166-2:PG"
  },
  {
    "slug": "paraguay",
    "name": "Paraguay",
    "alpha2": "PY",
    "alpha3": "PRY",
    "numerical": "600",
    "iso_3166_2": "ISO 3166-2:PY"
  },
  {
    "slug": "peru",
    "name": "Peru",
    "alpha2": "PE",
    "alpha3": "PER",
    "numerical": "604",
    "iso_3166_2": "ISO 3166-2:PE"
  },
  {
    "slug": "philippines",
    "name": "Philippines",
    "alpha2": "PH",
    "alpha3": "PHL",
    "numerical": "608",
    "iso_3166_2": "ISO 3166-2:PH"
  },
  {
    "slug": "pitcairn",
    "name": "Pitcairn",
    "alpha2": "PN",
    "alpha3": "PCN",
    "numerical": "612",
    "iso_3166_2": "ISO 3166-2:PN"
  },
  {
    "slug": "poland",
    "name": "Poland",
    "alpha2": "PL",
    "alpha3": "POL",
    "numerical": "616",
    "iso_3166_2": "ISO 3166-2:PL"
  },
  {
    "slug": "portugal",
    "name": "Portugal",
    "alpha2": "PT",
    "alpha3": "PRT",
    "numerical": "620",
    "iso_3166_2": "ISO 3166-2:PT"
  },
  {
    "slug": "puerto-rico",
    "name": "Puerto Rico",
    "alpha2": "PR",
    "alpha3": "PRI",
    "numerical": "630",
    "iso_3166_2": "ISO 3166-2:PR"
  },
  {
    "slug": "qatar",
    "name": "Qatar",
    "alpha2": "QA",
    "alpha3": "QAT",
    "numerical": "634",
    "iso_3166_2": "ISO 3166-2:QA"
  },
  {
    "slug": "reunion",
    "name": "Réunion",
    "alpha2": "RE",
    "alpha3": "REU",
    "numerical": "638",
    "iso_3166_2": "ISO 3166-2:RE"
  },
  {
    "slug": "romania",
    "name": "Romania",
    "alpha2": "RO",
    "alpha3": "ROU",
    "numerical": "642",
    "iso_3166_2": "ISO 3166-2:RO"
  },
  {
    "slug": "russian-federation",
    "name": "Russian Federation",
    "alpha2": "RU",
    "alpha3": "RUS",
    "numerical": "643",
    "iso_3166_2": "ISO 3166-2:RU"
  },
  {
    "slug": "russia",
    "name": "Russia",
    "alpha2": "RU",
    "alpha3": "RUS",
    "numerical": "643",
    "iso_3166_2": "ISO 3166-2:RU"
  },
  {
    "slug": "rwanda",
    "name": "Rwanda",
    "alpha2": "RW",
    "alpha3": "RWA",
    "numerical": "646",
    "iso_3166_2": "ISO 3166-2:RW"
  },
  {
    "slug": "saint-barthelemy",
    "name": "Saint Barthélemy",
    "alpha2": "BL",
    "alpha3": "BLM",
    "numerical": "652",
    "iso_3166_2": "ISO 3166-2:BL"
  },
  {
    "slug": "saint-helena-ascension-and-tristan-da-cunha",
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "alpha2": "SH",
    "alpha3": "SHN",
    "numerical": "654",
    "iso_3166_2": "ISO 3166-2:SH"
  },
  {
    "slug": "saint-kitts-and-nevis",
    "name": "Saint Kitts and Nevis",
    "alpha2": "KN",
    "alpha3": "KNA",
    "numerical": "659",
    "iso_3166_2": "ISO 3166-2:KN"
  },
  {
    "slug": "saint-lucia",
    "name": "Saint Lucia",
    "alpha2": "LC",
    "alpha3": "LCA",
    "numerical": "662",
    "iso_3166_2": "ISO 3166-2:LC"
  },
  {
    "slug": "saint-martin-french-part",
    "name": "Saint Martin (French part)",
    "alpha2": "MF",
    "alpha3": "MAF",
    "numerical": "663",
    "iso_3166_2": "ISO 3166-2:MF"
  },
  {
    "slug": "saint-pierre-and-miquelon",
    "name": "Saint Pierre and Miquelon",
    "alpha2": "PM",
    "alpha3": "SPM",
    "numerical": "666",
    "iso_3166_2": "ISO 3166-2:PM"
  },
  {
    "slug": "saint-vincent-and-the-grenadines",
    "name": "Saint Vincent and the Grenadines",
    "alpha2": "VC",
    "alpha3": "VCT",
    "numerical": "670",
    "iso_3166_2": "ISO 3166-2:VC"
  },
  {
    "slug": "samoa",
    "name": "Samoa",
    "alpha2": "WS",
    "alpha3": "WSM",
    "numerical": "882",
    "iso_3166_2": "ISO 3166-2:WS"
  },
  {
    "slug": "san-marino",
    "name": "San Marino",
    "alpha2": "SM",
    "alpha3": "SMR",
    "numerical": "674",
    "iso_3166_2": "ISO 3166-2:SM"
  },
  {
    "slug": "sao-tome-and-principe",
    "name": "Sao Tome and Principe",
    "alpha2": "ST",
    "alpha3": "STP",
    "numerical": "678",
    "iso_3166_2": "ISO 3166-2:ST"
  },
  {
    "slug": "saudi-arabia",
    "name": "Saudi Arabia",
    "alpha2": "SA",
    "alpha3": "SAU",
    "numerical": "682",
    "iso_3166_2": "ISO 3166-2:SA"
  },
  {
    "slug": "senegal",
    "name": "Senegal",
    "alpha2": "SN",
    "alpha3": "SEN",
    "numerical": "686",
    "iso_3166_2": "ISO 3166-2:SN"
  },
  {
    "slug": "serbia",
    "name": "Serbia",
    "alpha2": "RS",
    "alpha3": "SRB",
    "numerical": "688",
    "iso_3166_2": "ISO 3166-2:RS"
  },
  {
    "slug": "seychelles",
    "name": "Seychelles",
    "alpha2": "SC",
    "alpha3": "SYC",
    "numerical": "690",
    "iso_3166_2": "ISO 3166-2:SC"
  },
  {
    "slug": "sierra-leone",
    "name": "Sierra Leone",
    "alpha2": "SL",
    "alpha3": "SLE",
    "numerical": "694",
    "iso_3166_2": "ISO 3166-2:SL"
  },
  {
    "slug": "singapore",
    "name": "Singapore",
    "alpha2": "SG",
    "alpha3": "SGP",
    "numerical": "702",
    "iso_3166_2": "ISO 3166-2:SG"
  },
  {
    "slug": "sint-maarten-dutch-part",
    "name": "Sint Maarten (Dutch part)",
    "alpha2": "SX",
    "alpha3": "SXM",
    "numerical": "534",
    "iso_3166_2": "ISO 3166-2:SX"
  },
  {
    "slug": "slovakia",
    "name": "Slovakia",
    "alpha2": "SK",
    "alpha3": "SVK",
    "numerical": "703",
    "iso_3166_2": "ISO 3166-2:SK"
  },
  {
    "slug": "slovenia",
    "name": "Slovenia",
    "alpha2": "SI",
    "alpha3": "SVN",
    "numerical": "705",
    "iso_3166_2": "ISO 3166-2:SI"
  },
  {
    "slug": "solomon-islands",
    "name": "Solomon Islands",
    "alpha2": "SB",
    "alpha3": "SLB",
    "numerical": "090",
    "iso_3166_2": "ISO 3166-2:SB"
  },
  {
    "slug": "somalia",
    "name": "Somalia",
    "alpha2": "SO",
    "alpha3": "SOM",
    "numerical": "706",
    "iso_3166_2": "ISO 3166-2:SO"
  },
  {
    "slug": "south-africa",
    "name": "South Africa",
    "alpha2": "ZA",
    "alpha3": "ZAF",
    "numerical": "710",
    "iso_3166_2": "ISO 3166-2:ZA"
  },
  {
    "slug": "south-georgia-and-the-south-sandwich-islands",
    "name": "South Georgia and the South Sandwich Islands",
    "alpha2": "GS",
    "alpha3": "SGS",
    "numerical": "239",
    "iso_3166_2": "ISO 3166-2:GS"
  },
  {
    "slug": "south-sudan",
    "name": "South Sudan",
    "alpha2": "SS",
    "alpha3": "SSD",
    "numerical": "728",
    "iso_3166_2": "ISO 3166-2:SS"
  },
  {
    "slug": "spain",
    "name": "Spain",
    "alpha2": "ES",
    "alpha3": "ESP",
    "numerical": "724",
    "iso_3166_2": "ISO 3166-2:ES"
  },
  {
    "slug": "sri-lanka",
    "name": "Sri Lanka",
    "alpha2": "LK",
    "alpha3": "LKA",
    "numerical": "144",
    "iso_3166_2": "ISO 3166-2:LK"
  },
  {
    "slug": "sudan",
    "name": "Sudan",
    "alpha2": "SD",
    "alpha3": "SDN",
    "numerical": "729",
    "iso_3166_2": "ISO 3166-2:SD"
  },
  {
    "slug": "suriname",
    "name": "Suriname",
    "alpha2": "SR",
    "alpha3": "SUR",
    "numerical": "740",
    "iso_3166_2": "ISO 3166-2:SR"
  },
  {
    "slug": "svalbard-and-jan-mayen",
    "name": "Svalbard and Jan Mayen",
    "alpha2": "SJ",
    "alpha3": "SJM",
    "numerical": "744",
    "iso_3166_2": "ISO 3166-2:SJ"
  },
  {
    "slug": "sweden",
    "name": "Sweden",
    "alpha2": "SE",
    "alpha3": "SWE",
    "numerical": "752",
    "iso_3166_2": "ISO 3166-2:SE"
  },
  {
    "slug": "switzerland",
    "name": "Switzerland",
    "alpha2": "CH",
    "alpha3": "CHE",
    "numerical": "756",
    "iso_3166_2": "ISO 3166-2:CH"
  },
  {
    "slug": "syrian-arab-republic",
    "name": "Syrian Arab Republic",
    "alpha2": "SY",
    "alpha3": "SYR",
    "numerical": "760",
    "iso_3166_2": "ISO 3166-2:SY"
  },
  {
    "slug": "syria",
    "name": "Syria",
    "alpha2": "SY",
    "alpha3": "SYR",
    "numerical": "760",
    "iso_3166_2": "ISO 3166-2:SY"
  },
  {
    "slug": "taiwan-province-of-chinaa",
    "name": "Taiwan, Province of China[a]",
    "alpha2": "TW",
    "alpha3": "TWN",
    "numerical": "158",
    "iso_3166_2": "ISO 3166-2:TW"
  },
  {
    "slug": "taiwan",
    "name": "Taiwan",
    "alpha2": "TW",
    "alpha3": "TWN",
    "numerical": "158",
    "iso_3166_2": "ISO 3166-2:TW"
  },
  {
    "slug": "tajikistan",
    "name": "Tajikistan",
    "alpha2": "TJ",
    "alpha3": "TJK",
    "numerical": "762",
    "iso_3166_2": "ISO 3166-2:TJ"
  },
  {
    "slug": "tanzania-united-republic-of",
    "name": "Tanzania, United Republic of",
    "alpha2": "TZ",
    "alpha3": "TZA",
    "numerical": "834",
    "iso_3166_2": "ISO 3166-2:TZ"
  },
  {
    "slug": "tanzania",
    "name": "Tanzania",
    "alpha2": "TZ",
    "alpha3": "TZA",
    "numerical": "834",
    "iso_3166_2": "ISO 3166-2:TZ"
  },
  {
    "slug": "thailand",
    "name": "Thailand",
    "alpha2": "TH",
    "alpha3": "THA",
    "numerical": "764",
    "iso_3166_2": "ISO 3166-2:TH"
  },
  {
    "slug": "timor-leste",
    "name": "Timor-Leste",
    "alpha2": "TL",
    "alpha3": "TLS",
    "numerical": "626",
    "iso_3166_2": "ISO 3166-2:TL"
  },
  {
    "slug": "togo",
    "name": "Togo",
    "alpha2": "TG",
    "alpha3": "TGO",
    "numerical": "768",
    "iso_3166_2": "ISO 3166-2:TG"
  },
  {
    "slug": "tokelau",
    "name": "Tokelau",
    "alpha2": "TK",
    "alpha3": "TKL",
    "numerical": "772",
    "iso_3166_2": "ISO 3166-2:TK"
  },
  {
    "slug": "tonga",
    "name": "Tonga",
    "alpha2": "TO",
    "alpha3": "TON",
    "numerical": "776",
    "iso_3166_2": "ISO 3166-2:TO"
  },
  {
    "slug": "trinidad-and-tobago",
    "name": "Trinidad and Tobago",
    "alpha2": "TT",
    "alpha3": "TTO",
    "numerical": "780",
    "iso_3166_2": "ISO 3166-2:TT"
  },
  {
    "slug": "tunisia",
    "name": "Tunisia",
    "alpha2": "TN",
    "alpha3": "TUN",
    "numerical": "788",
    "iso_3166_2": "ISO 3166-2:TN"
  },
  {
    "slug": "turkey",
    "name": "Turkey",
    "alpha2": "TR",
    "alpha3": "TUR",
    "numerical": "792",
    "iso_3166_2": "ISO 3166-2:TR"
  },
  {
    "slug": "turkmenistan",
    "name": "Turkmenistan",
    "alpha2": "TM",
    "alpha3": "TKM",
    "numerical": "795",
    "iso_3166_2": "ISO 3166-2:TM"
  },
  {
    "slug": "turks-and-caicos-islands",
    "name": "Turks and Caicos Islands",
    "alpha2": "TC",
    "alpha3": "TCA",
    "numerical": "796",
    "iso_3166_2": "ISO 3166-2:TC"
  },
  {
    "slug": "tuvalu",
    "name": "Tuvalu",
    "alpha2": "TV",
    "alpha3": "TUV",
    "numerical": "798",
    "iso_3166_2": "ISO 3166-2:TV"
  },
  {
    "slug": "uganda",
    "name": "Uganda",
    "alpha2": "UG",
    "alpha3": "UGA",
    "numerical": "800",
    "iso_3166_2": "ISO 3166-2:UG"
  },
  {
    "slug": "ukraine",
    "name": "Ukraine",
    "alpha2": "UA",
    "alpha3": "UKR",
    "numerical": "804",
    "iso_3166_2": "ISO 3166-2:UA"
  },
  {
    "slug": "united-arab-emirates",
    "name": "United Arab Emirates",
    "alpha2": "AE",
    "alpha3": "ARE",
    "numerical": "784",
    "iso_3166_2": "ISO 3166-2:AE"
  },
  {
    "slug": "united-kingdom-of-great-britain-and-northern-ireland",
    "name": "United Kingdom of Great Britain and Northern Ireland",
    "alpha2": "GB",
    "alpha3": "GBR",
    "numerical": "826",
    "iso_3166_2": "ISO 3166-2:GB"
  },
  {
    "slug": "united-kingdom",
    "name": "United Kingdom",
    "alpha2": "GB",
    "alpha3": "GBR",
    "numerical": "826",
    "iso_3166_2": "ISO 3166-2:GB"
  },
  {
    "slug": "united-states-of-america",
    "name": "United States of America",
    "alpha2": "US",
    "alpha3": "USA",
    "numerical": "840",
    "iso_3166_2": "ISO 3166-2:US"
  },
  {
    "slug": "us",
    "name": "US",
    "alpha2": "US",
    "alpha3": "USA",
    "numerical": "840",
    "iso_3166_2": "ISO 3166-2:US"
  },
  {
    "slug": "united-states-minor-outlying-islands",
    "name": "United States Minor Outlying Islands",
    "alpha2": "UM",
    "alpha3": "UMI",
    "numerical": "581",
    "iso_3166_2": "ISO 3166-2:UM"
  },
  {
    "slug": "uruguay",
    "name": "Uruguay",
    "alpha2": "UY",
    "alpha3": "URY",
    "numerical": "858",
    "iso_3166_2": "ISO 3166-2:UY"
  },
  {
    "slug": "uzbekistan",
    "name": "Uzbekistan",
    "alpha2": "UZ",
    "alpha3": "UZB",
    "numerical": "860",
    "iso_3166_2": "ISO 3166-2:UZ"
  },
  {
    "slug": "vanuatu",
    "name": "Vanuatu",
    "alpha2": "VU",
    "alpha3": "VUT",
    "numerical": "548",
    "iso_3166_2": "ISO 3166-2:VU"
  },
  {
    "slug": "venezuela-bolivarian-republic-of",
    "name": "Venezuela (Bolivarian Republic of)",
    "alpha2": "VE",
    "alpha3": "VEN",
    "numerical": "862",
    "iso_3166_2": "ISO 3166-2:VE"
  },
  {
    "slug": "venezuela",
    "name": "Venezuela",
    "alpha2": "VE",
    "alpha3": "VEN",
    "numerical": "862",
    "iso_3166_2": "ISO 3166-2:VE"
  },
  {
    "slug": "viet-nam",
    "name": "Viet Nam",
    "alpha2": "VN",
    "alpha3": "VNM",
    "numerical": "704",
    "iso_3166_2": "ISO 3166-2:VN"
  },
  {
    "slug": "vietnam",
    "name": "Vietnam",
    "alpha2": "VN",
    "alpha3": "VNM",
    "numerical": "704",
    "iso_3166_2": "ISO 3166-2:VN"
  },
  {
    "slug": "virgin-islands-british",
    "name": "Virgin Islands (British)",
    "alpha2": "VG",
    "alpha3": "VGB",
    "numerical": "092",
    "iso_3166_2": "ISO 3166-2:VG"
  },
  {
    "slug": "virgin-islands-us",
    "name": "Virgin Islands (U.S.)",
    "alpha2": "VI",
    "alpha3": "VIR",
    "numerical": "850",
    "iso_3166_2": "ISO 3166-2:VI"
  },
  {
    "slug": "wallis-and-futuna",
    "name": "Wallis and Futuna",
    "alpha2": "WF",
    "alpha3": "WLF",
    "numerical": "876",
    "iso_3166_2": "ISO 3166-2:WF"
  },
  {
    "slug": "western-sahara",
    "name": "Western Sahara",
    "alpha2": "EH",
    "alpha3": "ESH",
    "numerical": "732",
    "iso_3166_2": "ISO 3166-2:EH"
  },
  {
    "slug": "yemen",
    "name": "Yemen",
    "alpha2": "YE",
    "alpha3": "YEM",
    "numerical": "887",
    "iso_3166_2": "ISO 3166-2:YE"
  },
  {
    "slug": "zambia",
    "name": "Zambia",
    "alpha2": "ZM",
    "alpha3": "ZMB",
    "numerical": "894",
    "iso_3166_2": "ISO 3166-2:ZM"
  },
  {
    "slug": "zimbabwe",
    "name": "Zimbabwe",
    "alpha2": "ZW",
    "alpha3": "ZWE",
    "numerical": "716",
    "iso_3166_2": "ISO 3166-2:ZW"
  }
];

export default isoA2;
