"use strict";
var video = document.getElementById("myVideo");
var time = 36;
var NaarKeuzeZonderDraad = 0;
var AriadneWantsTheD = 0;
var NaarKeuzeMetDraad = 0;

function AddImageMap(HtmlImageMap)
{
    $('#DImageMap').html(HtmlImageMap);
}

video.onended = function()
{
    video.src = "videos/Heracles/einde.mp4";
    document.getElementById("1pixel").style.visibility = "hidden";
    video.onended = function() {

    }
}

function InitializeVideo()
{
    $(document).ready(function()
    {
        var teststring = video.currentSrc.split('/');
        //        teststring = teststring.substring(teststring.lastIndexOf("/", 2) + 1);
        teststring = teststring[teststring.length - 2] + "/" + teststring[teststring.length - 1];
        switch (teststring)
        {


            case 'videos/begin.mp4': //Einde

                var HtmlImageMap = "<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"643,597,705,577,824,592,770,616\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1347,758,1426,788,1360,827,1284,804\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1380,860,1483,799,1659,886,1551,931\" \/>\n<\/map>";
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Heracles/begin%20heracles.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Achilles/begin%20achilles.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button3').click(function()
                {
                    video.src = "videos/Theseus/begin%20theseus.mp4";
                    InitializeVideo();
                    return false;
                });
                $(video).on('timeupdate', ShowImageMap);
                $('map').imageMapResize();

                video.onended = function()
                {
                    location.href = "einde.html";
                }

                break;

            case 'videos/einde.mp4': //Einde
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }

                break;

            case 'Heracles/begin%20heracles.mp4': //Begin Heracles
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 97;
                //TimeUpdate staat al aan
                var HtmlImageMap = "<map name=\"videomap\">\n\t\t\t<area id=\"MapArea1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1422,406,1450,430,1462,460,1463,497,1453,519,1406,540,1370,539,1331,525,1299,489,1175,457,1167,397,1184,379,1233,364,1266,363,1297,382,1315,405\"\/>\n\t\t\t<area id=\"MapArea2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1160,475,1191,497,1206,510,1218,529,1221,551,1219,574,1218,593,1207,607,1178,615,1153,619,1125,617,1102,609,1085,591,994,546,966,522,937,495,923,476,925,453,942,430,974,413,996,404,1008,404,1039,422,1063,447,1076,471\" \/>\n\t\t\t<\/map>";
                AddImageMap(HtmlImageMap);
                $('#MapArea1').click(function()
                {
                    video.src = "videos/Heracles/heracles%20handen%20leeuw.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#MapArea2').click(function()
                {
                    video.src = "videos/Heracles/heracles%20zwaard%20leeuw.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'Heracles/deianeira%20dumpen.mp4': //Deianeira Dumpen
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }
                break;

            case 'Heracles/deianeira%20fixen.mp4': //Deianeira fixen
                document.getElementById("1pixel").style.visibility = "hidden";
                var HtmlImageMap = '<map name=\"videomap\">\n<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"146,195,765,508\" \/>\n<area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"146,567,794,893\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Heracles/deianeira%20dumpen.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Heracles/zelfmoord%20heracles.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;



            case 'Heracles/heracles%20handen%20leeuw.mp4': //Heracles handen leeuw
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 97;
                //TimeUpdate staat nog aan
                var HtmlImageMap = "<map name=\"videomap\">\n<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"128,214,959,478\" \/>\n<area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"354,608,709,767\" \/>\n<\/map>";
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Heracles/opgeven%201.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Heracles/twijfel%202.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'Heracles/heracles%20zwaard%20leeuw.mp4': //Heracles Zwaard Leeuw
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }
                break;

            case 'Heracles/leeuwenvel%20zit%20niet%20goed.mp4': //Leeuwenvel zit niet goed
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 46;
                //TimeUpdate staat nog aan
                var HtmlImageMap = "<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"430,536,595,826\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"924,347,1194,763\" \/>\n<\/map>";
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Heracles/deianeira%20fixen.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Heracles/niet%20deianeira%20fixen.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'Heracles/niet%20deianeira%20fixen.mp4': //Niet Deianeira fixen
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }

                break;

            case 'Heracles/opgeven%201.mp4': //Opgeven 1
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }

                break;

            case 'Heracles/opgeven%202.mp4': //Opgeven 2
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }

                break;

            case 'Heracles/opgeven%203.mp4': //Opgeven 3
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }

                break;

            case 'Heracles/pak%20die%20appeltjes.mp4': //Pak die Appeltjes
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 108;
                //TimeUpdate staat nog aan
                var HtmlImageMap = "<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"1061,283,1892,587\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"1061,660,1878,941\" \/>\n<\/map>";
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Heracles/leeuwenvel%20zit%20niet%20goed.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Heracles/vis%20is%20verdronken.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'Heracles/twijfel%202.mp4': //Twijfel 2
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 33;
                //TimeUpdate staat nog aan
                var HtmlImageMap = "<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"103,197,1014,466\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"340,602,700,766\" \/>\n<\/map>";
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Heracles/opgeven%202.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Heracles/twijfel%203.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'Heracles/twijfel%203.mp4': //Twijfel 3
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 46;
                //TimeUpdate staat nog aan
                var HtmlImageMap = "<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"118,225,1010,450\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"352,603,700,755\" \/>\n<\/map>";
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Heracles/opgeven%203.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Heracles/pak%20die%20appeltjes.mp4";
                    InitializeVideo();
                    return false;
                });

                $('map').imageMapResize();
                break;

            case 'Heracles/vis%20is%20verdronken.mp4': //Vis is verdronken
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }

                break;

            case 'Heracles/zelfmoord%20heracles.mp4': //Zelfmoord Heracles
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }

                break;

            case 'Achilles/begin%20achilles.mp4': //Heracles handen leeuw
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 140;
                //TimeUpdate staat nog aan
                var HtmlImageMap = "<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"910,399,910,453,943,450,950,469,953,493,955,521,946,557,930,595,912,607,867,615,851,622,1054,710,1414,810,1899,845,1900,551\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1,782,622,807,756,874,778,976,2,978\" \/>\n<\/map>";
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Achilles/achilles%20in%20troje%20aangekomen.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/einde.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();

                break;

            case 'Achilles/achilles%20in%20troje%20aangekomen.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 93;
                //TimeUpdate staat nog aan
                var HtmlImageMap = "<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"127,140,1049,533\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"130,553,1040,904\" \/>\n<\/map>";
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Achilles/troilus%20doden.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Achilles/meer%20vis%20in%20de%20zee.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'Achilles/troilus%20doden.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    video.src = "videos/Achilles/briseis%20fixen.mp4";
                    InitializeVideo();
                }

                break;
            case 'Achilles/meer%20vis%20in%20de%20zee.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    video.src = "videos/Achilles/briseis%20fixen.mp4";
                    InitializeVideo();
                }

                break;

            case 'Achilles/briseis%20fixen.mp4':
                video.onended = function()
                {
                    location.href = "einde.html";
                }
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 117;
                $(video).on('timeupdate', ShowImageMap);
                var HtmlImageMap = '<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"135,194,755,419\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"109,515,1079,541,1295,697,1303,856,115,866\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1013,168,1066,526,1233,596,1771,603,1727,188\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Achilles/oke%20is%20goed.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Achilles/ik%20stop%20met%20vechten.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button3').click(function()
                {
                    video.src = "videos/Achilles/nee%20zij%20is%20van%20mij.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();


                break;
            case 'Achilles/oke%20is%20goed.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }
                break;
            case 'Achilles/nee%20zij%20is%20van%20mij.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }
                break;
            case 'Achilles/ik%20stop%20met%20vechten.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }

                break;

            case 'Theseus/begin%20theseus.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 137;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1191,296,1143,321,1124,347,1133,387,1118,409,1068,452,1040,503,1041,577,1050,612,1040,668,1020,747,1018,835,1024,917,1022,974,1349,981,1337,842,1331,749,1297,636,1316,590,1328,537,1325,470,1282,412,1266,350,1241,310,1217,296\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"220,414,458,651\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/ariadne%20fixen.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/zonder%20draad/labyrint%20zonder%20draad.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'zonder%20draad/labyrint%20zonder%20draad.mp4':
                NaarKeuzeZonderDraad = 1;
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 13;
				$(video).on('timeupdate', ShowImageMap);
                var HtmlImageMap = '<map name=\"videomap\">\n\t <area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1107,499,1038,627,1082,625,1102,761,1188,750,1169,615,1214,603\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1460,751,1465,860,1635,859,1641,914,1786,800,1644,692,1632,743\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/zonder%20draad/doodloop1.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/zonder%20draad/1rechts.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'zonder%20draad/doodloop1.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                if (NaarKeuzeZonderDraad != 3)
                {
                    video.onended = function()
                    {
                        video.src = "videos/Theseus/zonder%20draad/keuze1.mp4";
                        InitializeVideo();
                        return false;
                    }
                }
                else if (NaarKeuzeZonderDraad == 3)
                {
                    video.onended = function()
                    {
                        video.src = "videos/Theseus/zonder%20draad/keuze3.mp4";
                        InitializeVideo();
                        return false;
                    }
                }
                break;

            case 'zonder%20draad/keuze1.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 0;
                $(video).on('timeupdate', ShowImageMap);

                video.onended = function()
                {
                    video.src = "videos/Heracles/einde.mp4";
                    document.getElementById("1pixel").style.visibility = "hidden";
                    video.onended = function() {

                    }
                }
                break;

            case 'zonder%20draad/1rechts.mp4':
                NaarKeuzeZonderDraad = 2;
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 16;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t <area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"975,706,1059,731,1017,864,1058,881,938,965,892,827,933,834\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1500,698,1502,780,1629,782,1634,823,1744,738,1636,655,1628,696\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/zonder%20draad/doodloop2.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/zonder%20draad/2rechtdoor.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'zonder%20draad/doodloop2.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                if (NaarKeuzeZonderDraad != 3)
                {
                    video.onended = function()
                    {
                        video.src = "videos/Theseus/zonder%20draad/keuze2.mp4";
                        InitializeVideo();
                        return false;
                    }
                }
                else if (NaarKeuzeZonderDraad == 3)
                {
                    video.onended = function()
                    {
                        video.src = "videos/Theseus/zonder%20draad/keuze3.mp4";
                        InitializeVideo();
                        return false;
                    }
                }
                break;

            case 'zonder%20draad/keuze2.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 0;
                $(video).on('timeupdate', ShowImageMap);

                video.onended = function()
                {
                    video.src = "videos/Heracles/einde.mp4";
                    document.getElementById("1pixel").style.visibility = "hidden";
                    video.onended = function() {

                    }
                }
                break;

            case 'zonder%20draad/2rechtdoor.mp4':
                NaarKeuzeZonderDraad = 3;
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 15;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t <area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"243,731,335,668,334,697,440,701,441,767,335,767,331,805\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"919,740,921,857,885,858,957,957,1031,859,996,851,995,743\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1565,789,1675,790,1675,755,1772,824,1677,898,1670,859,1562,861\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/zonder%20draad/doodloop1.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/zonder%20draad/uitkomst%20zonder%20draad.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button3').click(function()
                {
                    video.src = "videos/Theseus/zonder%20draad/doodloop2.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
				
			 case 'zonder%20draad/keuze3.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 0;
                $(video).on('timeupdate', ShowImageMap);

                video.onended = function()
                {
                    video.src = "videos/Heracles/einde.mp4";
                    document.getElementById("1pixel").style.visibility = "hidden";
                    video.onended = function() {

                    }
                }
                break;

            case 'zonder%20draad/uitkomst%20zonder%20draad.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }
                break;
				
			case 'Theseus/ariadne%20fixen.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 4;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t <area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"705,147,1219,394\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"701,410,1265,653\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"556,656,1421,959\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/hoi.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/tring.mp4";
                    InitializeVideo();
                    return false;
                });
				$('#Button3').click(function()
                {
                    video.src = "videos/Theseus/dochter.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
			
			case 'Theseus/hoi.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 6;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"626,145,1345,397\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"520,420,1428,610\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"587,705,1398,916\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/lul.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/drinken.mp4";
                    InitializeVideo();
                    return false;
                });
				$('#Button3').click(function()
                {
                    video.src = "videos/Theseus/pijn.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
				
			case 'Theseus/dochter.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 6;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"626,145,1345,397\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"520,420,1428,610\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"587,705,1398,916\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/lul.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/drinken.mp4";
                    InitializeVideo();
                    return false;
                });
				$('#Button3').click(function()
                {
                    video.src = "videos/Theseus/pijn.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
				
			case 'Theseus/tring.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 5;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"626,145,1345,397\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"520,420,1428,610\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"587,705,1398,916\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/lul.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/drinken.mp4";
                    InitializeVideo();
                    return false;
                });
				$('#Button3').click(function()
                {
					AriadneWantsTheD = 1;
                    video.src = "videos/Theseus/pijn.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
				
			case 'Theseus/lul.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 7;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"626,145,1345,397\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"520,420,1428,610\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"587,705,1398,916\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
					AriadneWantsTheD = 1;
                    video.src = "videos/Theseus/8uur.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/netflix.mp4";
                    InitializeVideo();
                    return false;
                });
				$('#Button3').click(function()
                {
                    video.src = "videos/Theseus/stelling.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
				
			case 'Theseus/drinken.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 5;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"626,145,1345,397\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"520,420,1428,610\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"587,705,1398,916\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
					AriadneWantsTheD = 1;
                    video.src = "videos/Theseus/8uur.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/netflix.mp4";
                    InitializeVideo();
                    return false;
                });
				$('#Button3').click(function()
                {
                    video.src = "videos/Theseus/stelling.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
				
			case 'Theseus/pijn.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 7;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"626,145,1345,397\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"520,420,1428,610\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"587,705,1398,916\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
					AriadneWantsTheD = 1;
                    video.src = "videos/Theseus/8uur.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/netflix.mp4";
                    InitializeVideo();
                    return false;
                });
				$('#Button3').click(function()
                {
                    video.src = "videos/Theseus/stelling.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
			
			case 'Theseus/8uur.mp4':
				document.getElementById("1pixel").style.visibility = "hidden";
				video.onended = function()
                    {
                        video.src = "videos/Theseus/leuk.mp4";
                        InitializeVideo();
                        return false;
                    }
			break;
			
			case 'Theseus/netflix.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
				 $(video).off('timeupdate');
                if(AriadneWantsTheD == 1){
					 video.onended = function()
                    {
                        video.src = "videos/Theseus/leuk.mp4";
                        InitializeVideo();
                        return false;
                    }
				}
				else{
				 video.onended = function()
                    {
                        video.src = "videos/Theseus/gadver.mp4";
                        InitializeVideo();
                        return false;
                    }	
				}
                break;
				
			case 'Theseus/stelling.mp4':
				video.onended = function()
					{
                        video.src = "videos/Theseus/zonder%20draad/labyrint%20zonder%20draad.mp4";
                        InitializeVideo();
                        return false;
                    }	
				break;
				
			case 'Theseus/leuk.mp4': //Nog doen
				video.onended = function()
					{
                        video.src = "videos/Theseus/met%20draad/labyrint%20met%20draad.mp4";
                        InitializeVideo();
                        return false;
                    }	
				break;
			
			case 'Theseus/gadver.mp4':
				video.onended = function()
					{
                        video.src = "videos/Theseus/zonder%20draad/labyrint%20zonder%20draad.mp4";
                        InitializeVideo();
                        return false;
                    }	
				break;
				
			case 'met%20draad/labyrint%20met%20draad.mp4':
                NaarKeuzeMetDraad = 1;
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 18;
				$(video).on('timeupdate', ShowImageMap);
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t<area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"924,538,1032,642,989,654,1007,787,919,802,899,663,854,667\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1459,749,1460,858,1636,860,1640,914,1788,801,1641,693,1632,744\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/met%20draad/doodloop%20draad%201.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/met%20draad/1rechtsdraad.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;

            case 'met%20draad/doodloop%20draad%201.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                if (NaarKeuzeMetDraad == 1)
                {
                    video.onended = function()
                    {
                        video.src = "videos/Theseus/met%20draad/keuze1.mp4";
                        InitializeVideo();
                        return false;
                    }
                }
				else if (NaarKeuzeMetDraad == 2){
					video.onended = function()
                    {
                        video.src = "videos/Theseus/met%20draad/keuze2.mp4";
                        InitializeVideo();
                        return false;
                    }
				}
                else if (NaarKeuzeMetDraad == 3)
                {
                    video.onended = function()
                    {
                        video.src = "videos/Theseus/met%20draad/keuze3.mp4";
                        InitializeVideo();
                        return false;
                    }
                }
                break;

            case 'met%20draad/keuze1.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 0;
                $(video).on('timeupdate', ShowImageMap);

                video.onended = function()
                {
                    video.src = "videos/Heracles/einde.mp4";
                    document.getElementById("1pixel").style.visibility = "hidden";
                    video.onended = function() {

                    }
                }
                break;

            case 'met%20draad/1rechtsdraad.mp4':
                NaarKeuzeMetDraad = 2;
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 16;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t <area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"918,703,1001,730,966,861,1004,874,887,963,838,828,876,831\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1463,746,1462,860,1637,862,1639,913,1783,803,1644,693,1632,747\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/met%20draad/doodloop%20draad%201.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/met%20draad/2rechtdoordraad.mp4"; //Nog doen
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;


            case 'met%20draad/keuze2.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 0;
                $(video).on('timeupdate', ShowImageMap);

                video.onended = function()
                {
                    video.src = "videos/Heracles/einde.mp4";
                    document.getElementById("1pixel").style.visibility = "hidden";
                    video.onended = function() {

                    }
                }
                break;

            case 'met%20draad/2rechtdoordraad.mp4':
                NaarKeuzeMetDraad = 3;
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 18;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t <area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"319,668,316,709,454,734,442,825,304,807,293,847,185,742\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1079,708,1040,840,1001,831,1049,966,1167,878,1125,861,1162,734\" \/>\n    <area id=\"Button3\" alt=\"\" title=\"\" href=\"#\" shape=\"poly\" coords=\"1508,792,1513,881,1653,887,1657,928,1776,839,1659,748,1652,791\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/met%20draad/doodloop%20draad%201.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/met%20draad/minotaurus%20verslaan%20met%20draad.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button3').click(function()
                {
                    video.src = "videos/Theseus/met%20draad/doodloop%20draad%201.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
				
			 case 'met%20draad/keuze3.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 0;
                $(video).on('timeupdate', ShowImageMap);

                video.onended = function()
                {
                    video.src = "videos/Heracles/einde.mp4";
                    document.getElementById("1pixel").style.visibility = "hidden";
                    video.onended = function() {

                    }
                }
                break;

            case 'met%20draad/minotaurus%20verslaan%20met%20draad.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                time = 99;
                //TimeUpdate staat nog aan
                var HtmlImageMap = '<map name=\"videomap\">\n\t <area id=\"Button1\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"46,174,960,463\" \/>\n    <area id=\"Button2\" alt=\"\" title=\"\" href=\"#\" shape=\"rect\" coords=\"36,558,995,804\" \/>\n<\/map>';
                AddImageMap(HtmlImageMap);
                $('#Button1').click(function()
                {
                    video.src = "videos/Theseus/met%20draad/ariadne%20meenemen.mp4";
                    InitializeVideo();
                    return false;
                });
                $('#Button2').click(function()
                {
                    video.src = "videos/Theseus/met%20draad/ariadne%20niet%20meenemen.mp4";
                    InitializeVideo();
                    return false;
                });
                $('map').imageMapResize();
                break;
				
			 case 'met%20draad/ariadne%20niet%20meenemen.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }
                break;
				
			 case 'met%20draad/ariadne%20meenemen.mp4':
                document.getElementById("1pixel").style.visibility = "hidden";
                $(video).off('timeupdate');
                video.onended = function()
                {
                    location.href = "einde.html";
                }
                break;
				
			

            default:
                document.getElementById("1pixel").style.visibility = "hidden";
                break;




        }
    })
}

document.onkeypress = function(e)
{
    if ((e || window.event).keyCode === 32) //space
    {
        video.paused ? video.play() : video.pause();
    }
};

document.onkeydown = function(e)
{
    if ((e || window.event).keyCode === 38) // up arrow
    {
        video.currentTime = time;
    }
	else if ((e || window.event).keyCode === 37) // left arrow
    {
        video.currentTime += -10;
    }
	else if ((e || window.event).keyCode === 39) // right arrow
    {
        video.currentTime += 10;
    }
};


function ShowImageMap()
{
    if (video.currentTime >= time)
    {
        document.getElementById("1pixel").style.visibility = "";
    }
}

$(document).ready(function()
{
    InitializeVideo();
});