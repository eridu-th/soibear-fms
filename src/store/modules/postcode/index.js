import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

export default {
    namespaced: true,
    state() {
        return {
            thailand: {
                bangkok: ['10002', '10100', '10100', '10110', '10110', '10120', '10120', '10120', '10140', '10140', '10150', '10150', '10150', '10160', '10160', '10160', '10170', '10170', '10200', '10210', '10210', '10220', '10220', '10230', '10230', '10230', '10240', '10240', '10240', '10250', '10250', '10250', '10250', '10260', '10260', '10260', '10300', '10303', '10310', '10310', '10320', '10330', '10400', '10400', '10400', '10500', '10510', '10510', '10520', '10530', '10600', '10600', '10600', '10700', '10700', '10800', '10900'],
                samut_prakan: ['10130', '10270', '10280', '10290', '10540', '10540', '10550', '10560'],
                nonthaburi: ['11000', '11110', '11120', '11130', '11140', '11150'],
                pathum_thani: ['12000', '12110', '12120', '12130', '12130', '12140', '12150', '12160', '12170', '13180'],
                ayutthaya: ['13000', '13000', '13110', '13120', '13130', '13140', '13150', '13160', '13170', '13170', '13180', '13180', '13190', '13210', '13220', '13230', '13240', '13250', '13260', '13270', '13280', '13290', '18250', '18270'],
                lop_buri: ['13240', '15000', '15110', '15120', '15130', '15130', '15140', '15150', '15160', '15170', '15180', '15180', '15190', '15190', '15210', '15220', '15230', '15230', '15240', '15250', '18220'],
                ang_thong: ['14000', '14110', '14120', '14130', '14140', '14150', '14160'],
                sing_buri: ['16000', '16110', '16120', '16130', '16140', '16150', '16160'],
                chai_nat: ['17000', '17100', '17110', '17120', '17120', '17130', '17130', '17140', '17150', '17160', '17170'],
                saraburi: ['18000', '18000', '18110', '18120', '18130', '18140', '18150', '18160', '18170', '18180', '18190', '18210', '18210', '18220', '18230', '18240', '18250', '18260', '18270'],
                chon_buri: ['20000', '20110', '20120', '20130', '20131', '20140', '20150', '20160', '20170', '20180', '20182', '20190', '20220', '20230', '20240', '20240', '20250', '20251', '20260', '20270', '20280'],
                rayong: ['21000', '21110', '21110', '21110', '21120', '21130', '21140', '21150', '21160', '21170', '21180', '21190', '21210', '22160'],
                chanthaburi: ['22000', '22110', '22120', '22120', '22130', '22140', '22150', '22150', '22160', '22160', '22170', '22170', '22180', '22190', '22190', '22210'],
                trat: ['23000', '23000', '23110', '23120', '23130', '23140', '23150', '23170'],
                chachoengsao: ['24000', '24000', '24000', '24110', '24110', '24120', '24120', '24130', '24140', '24150', '24160', '24160', '24170', '24180', '24190'],
                prachin_buri: ['25000', '25110', '25130', '25140', '25150', '25190', '25220', '25230', '25240'],
                nakhon_nayok: ['25001', '26000', '26110', '26120', '26130'],
                sa_kaeo: ['27000', '27000', '27120', '27120', '27160', '27180', '27180', '27210', '27210', '27250', '27260'],
                nakhon_ratchasima: ['30000', '30000', '30110', '30120', '30120', '30120', '30130', '30140', '30150', '30150', '30160', '30170', '30180', '30190', '30210', '30210', '30220', '30220', '30230', '30230', '30240', '30240', '30250', '30260', '30270', '30270', '30270', '30280', '30280', '30290', '30310', '30320', '30330', '30340', '30350', '30360', '30370', '30380', '30410', '30430', '30440', '36220'],
                buri_ram: ['31000', '31000', '31000', '31110', '31110', '31110', '31110', '31120', '31120', '31130', '31140', '31150', '31150', '31160', '31170', '31170', '31180', '31190', '31210', '31220', '31230', '31240', '31250', '31260'],
                surin: ['32000', '32000', '32110', '32120', '32130', '32130', '32140', '32140', '32150', '32150', '32160', '32170', '32180', '32190', '32210', '32220', '32230'],
                si_sa_ket: ['33000', '33110', '33110', '33120', '33120', '33120', '33130', '33130', '33140', '33140', '33150', '33160', '33160', '33170', '33180', '33190', '33210', '33220', '33230', '33240', '33250', '33270'],
                ubon_ratchathani: ['34000', '34000', '34000', '34110', '34130', '34140', '34150', '34160', '34160', '34160', '34170', '34190', '34190', '34220', '34230', '34250', '34260', '34260', '34270', '34280', '34310', '34320', '34330', '34330', '34350', '34360'],
                yasothon: ['35000', '35110', '35120', '35120', '35130', '35140', '35150', '35160', '35170', '35180'],
                chaiyaphum: ['36000', '36110', '36120', '36130', '36130', '36130', '36140', '36150', '36160', '36170', '36180', '36190', '36210', '36220', '36220', '36230', '36240', '36250', '36260'],
                amnat_charoen: ['37000', '37000', '37110', '37180', '37210', '37240', '37290'],
                bueng_kan: ['38000', '38000', '38150', '38170', '38180', '38190', '38210', '38220'],
                nong_bua_lam_phu: ['39000', '39140', '39170', '39170', '39180', '39270'],
                khon_kaen: ['40000', '40002', '40110', '40110', '40110', '40120', '40130', '40140', '40150', '40150', '40160', '40160', '40170', '40170', '40180', '40190', '40210', '40220', '40230', '40240', '40250', '40260', '40270', '40280', '40290', '40310', '40320', '40330', '40340', '40350'],
                udon_thani: ['41000', '41110', '41110', '41130', '41130', '41130', '41150', '41190', '41190', '41210', '41220', '41230', '41240', '41250', '41260', '41280', '41290', '41310', '41320', '41330', '41340', '41360', '41370', '41380'],
                loei: ['41220', '41240', '42000', '42100', '42110', '42120', '42130', '42140', '42150', '42160', '42170', '42180', '42210', '42230'],
                nong_khai: ['43000', '43100', '43100', '43110', '43120', '43120', '43120', '43130', '43130', '43140', '43140', '43150', '43160', '43170', '43180', '43190', '43210', '43220'],
                maha_sarakham: ['44000', '44110', '44120', '44130', '44130', '44140', '44150', '44160', '44160', '44170', '44180', '44190', '44210'],
                roi_et: ['45000', '45000', '45000', '45000', '45110', '45120', '45130', '45140', '45140', '45150', '45160', '45170', '45170', '45170', '45180', '45190', '45210', '45220', '45230', '45240', '45250', '45280'],
                kalasin: ['46000', '46000', '46110', '46120', '46130', '46130', '46140', '46150', '46160', '46160', '46170', '46180', '46180', '46190', '46210', '46220', '46230', '46240'],
                sakon_nakhon: ['47000', '47110', '47120', '47130', '47140', '47150', '47160', '47170', '47180', '47180', '47190', '47210', '47220', '47220', '47230', '47230', '47240', '47250', '47260', '47270', '47280', '47290'],
                nakhon_phanom: ['48000', '48110', '48120', '48130', '48130', '48140', '48140', '48150', '48160', '48170', '48180', '48190'],
                mukdahan: ['49000', '49110', '49120', '49130', '49140', '49150', '49160'],
                chiang_mai: ['50000', '50100', '50110', '50120', '50130', '50130', '50140', '50150', '50160', '50160', '50170', '50180', '50190', '50200', '50210', '50220', '50230', '50240', '50240', '50250', '50260', '50270', '50280', '50290', '50300', '50310', '50320', '50320', '50330', '50330', '50340', '50350', '50360', '58130'],
                lamphun: ['51000', '51110', '51120', '51120', '51130', '51140', '51150', '51160', '51170', '51180'],
                lampang: ['52000', '52000', '52100', '52110', '52120', '52130', '52140', '52150', '52160', '52170', '52180', '52190', '52210', '52220', '52220', '52220', '52230', '52230', '52240'],
                uttaradit: ['53000', '53110', '53110', '53120', '53130', '53140', '53150', '53160', '53170', '53180', '53190', '53210', '53220', '53230'],
                phrae: ['54000', '54000', '54110', '54120', '54130', '54140', '54150', '54160', '54170'],
                nan: ['55000', '55000', '55110', '55120', '55130', '55130', '55140', '55150', '55160', '55160', '55170', '55180', '55190', '55210', '55220', '55220'],
                phayao: ['56000', '56000', '56110', '56110', '56120', '56130', '56140', '56150', '56160'],
                chiang_rai: ['57000', '57000', '57000', '57100', '57110', '57110', '57110', '57120', '57130', '57140', '57150', '57160', '57170', '57180', '57190', '57210', '57210', '57220', '57230', '57240', '57250', '57250', '57260', '57270', '57280', '57290', '57310', '57340'],
                mae_hong_son: ['58000', '58110', '58110', '58120', '58130', '58140', '58150'],
                nakhon_sawan: ['60000', '60110', '60120', '60130', '60140', '60150', '60150', '60150', '60150', '60160', '60170', '60180', '60190', '60210', '60220', '60230', '60240', '60250', '60260'],
                uthai_thani: ['61000', '61110', '61120', '61130', '61140', '61150', '61160', '61170', '61170', '61180'],
                kamphaeng_phet: ['62000', '62000', '62110', '62120', '62120', '62130', '62140', '62150', '62160', '62170', '62180', '62190', '62210'],
                tak: ['63000', '63000', '63110', '63120', '63130', '63140', '63150', '63160', '63170'],
                sukhothai: ['64000', '64110', '64120', '64130', '64140', '64150', '64160', '64170', '64180', '64190', '64210', '64220', '64230'],
                phitsanulok: ['64170', '65000', '65110', '65120', '65130', '65140', '65150', '65160', '65170', '65180', '65190', '65210', '65220', '65230', '65240'],
                phichit: ['66000', '66110', '66120', '66130', '66130', '66140', '66140', '66150', '66150', '66160', '66170', '66170', '66180', '66190', '66210', '66220', '66230'],
                phetchabun: ['67000', '67120', '67120', '67130', '67140', '67150', '67160', '67170', '67180', '67190', '67210', '67220', '67230', '67240', '67250', '67260', '67270', '67280'],
                ratchaburi: ['70000', '70110', '70120', '70130', '70140', '70150', '70160', '70170', '70180', '70180', '70190', '70210'],
                kanchanaburi: ['70190', '71000', '71000', '71110', '71120', '71120', '71130', '71130', '71140', '71150', '71160', '71170', '71170', '71180', '71190', '71210', '71220', '71220', '71240', '71250', '71260'],
                samut_sakhon: ['70210', '74000', '74110', '74120', '74130'],
                suphan_buri: ['71170', '71170', '72000', '72110', '72120', '72130', '72140', '72150', '72160', '72170', '72180', '72190', '72210', '72220', '72230', '72240', '72250'],
                nakhon_pathom: ['73000', '73110', '73120', '73130', '73140', '73150', '73160', '73170', '73170', '73180', '73190', '73210', '73220'],
                samut_songkhram: ['75000', '75110', '75120'],
                phetchaburi: ['76000', '76100', '76110', '76120', '76130', '76140', '76150', '76160', '76170'],
                prachuap_khiri_khan: ['77000', '77110', '77120', '77120', '77130', '77140', '77150', '77160', '77170', '77180', '77190', '77210', '77220', '77230'],
                nakhon_si_thammarat: ['80000', '80000', '80110', '80120', '80130', '80130', '80130', '80140', '80150', '80160', '80160', '80170', '80180', '80180', '80190', '80190', '80210', '80220', '80230', '80240', '80250', '80250', '80250', '80260', '80260', '80270', '80280', '80290', '80290', '80320', '80330', '80330', '80340', '80350', '80350', '80360'],
                krabi: ['81000', '81110', '81120', '81120', '81130', '81140', '81150', '81160', '81170'],
                phangnga: ['82000', '82110', '82120', '82130', '82140', '82150', '82160', '82170', '82180', '82190', '82210'],
                phuket: ['83000', '83100', '83110', '83120', '83150'],
                surat_thani: ['84000', '84100', '84110', '84120', '84130', '84140', '84150', '84160', '84160', '84170', '84180', '84180', '84190', '84210', '84210', '84220', '84220', '84230', '84240', '84240', '84250', '84260', '84270', '84280', '84290', '84310', '84320', '84330', '84340', '84350', '84360'],
                ranong: ['85000', '85110', '85120', '85120', '85130', '85130'],
                chumphon: ['86000', '86100', '86110', '86120', '86130', '86140', '86150', '86160', '86170', '86180', '86190', '86190', '86210', '86220', '86230'],
                songkhla: ['90000', '90100', '90110', '90110', '90120', '90130', '90140', '90150', '90160', '90170', '90180', '90190', '90210', '90220', '90220', '90230', '90230', '90240', '90250', '90260', '90270', '90280', '90310', '90320', '90330'],
                satun: ['91000', '91110', '91120', '91130', '91130', '91140', '91150', '91160'],
                trang: ['92000', '92000', '92000', '92110', '92120', '92120', '92130', '92130', '92140', '92140', '92150', '92160', '92170', '92170', '92180', '92190', '92190', '92210', '92220'],
                phatthalung: ['93000', '93000', '93000', '93110', '93110', '93120', '93130', '93140', '93150', '93160', '93160', '93170', '93180', '93190'],
                pattani: ['94000', '94110', '94120', '94130', '94140', '94140', '94150', '94160', '94170', '94180', '94180', '94190', '94190', '94190', '94190', '94220', '94230'],
                yala: ['95000', '95000', '95110', '95120', '95120', '95130', '95130', '95140', '95150', '95160', '95170'],
                narathiwat: ['96000', '96110', '96120', '96130', '96130', '96140', '96150', '96160', '96170', '96180', '96190', '96210', '96220', '96220'],
            },
        }
    },
    getters,
    actions,
    mutations,
}