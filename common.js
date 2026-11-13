/* Shared code for every page: menu, English/Hungarian switch, light/dark mode, translations. */
(function(){
  let theme = 'light';
  try { if (localStorage.getItem('theme') === 'dark') theme = 'dark'; } catch(e){}
  document.documentElement.dataset.theme = theme;

  const I18N = {
    en: {
      'theme.dark':'Dark mode', 'theme.light':'Light mode',
      'nav.home':'Home', 'nav.calc':'Calculator', 'nav.athletes':'Athletes', 'nav.bests':'Season bests', 'nav.final':'Finals level', 'nav.nations':'Nations', 'nav.log':'Training log', 'nav.about':'About',
      'g.W':'Women', 'g.M':'Men', 'allNations':'All nations', 'search':'Search athlete or nation',
      'd.f':'Fencing', 'd.o':'Obstacle', 'd.s':'Swim', 'd.l':'Laser Run', 'total':'Total', 'combined':'Combined',
      'rounds':'Rounds', 'rank':'Rank', 'athlete':'Athlete', 'place':'Place', 'round':'Round', 'points':'Points',
      'r.Q':'Qualification', 'r.SF':'Semi-final', 'r.F':'Final',
      'raw.de':'DE place {n}', 'raw.vd':'{v}V–{d}D', 'finalRank':'final rank {n}', 'placeShort':'place {n}', 'pts':'{n} pts',
      'noAthletes':'No athletes found.',
      'competitions':'{n} competitions', 'competition1':'1 competition',

      /* athletes page */
      'ath.title':'Athlete Results 2026',
      'tab.results':'Competition results', 'tab.sf':'Semi-finals & Finals', 'tab.q':'Qualifications', 'tab.all':'Averages', 'tab.h2h':'Head-to-head',
      'grp.F':'Final', 'grp.SF':'Semi-final', 'grp.Q':'Qualification',
      'grp.reachedF':'Reached a final', 'grp.reachedSF':'Reached a semi-final', 'grp.qOnly':'Qualification only', 'grp.sfOnly':'Semi-final only', 'grp.all':'All athletes',
      'hint.results':'Official final standings of the selected competition, with each athlete’s scores from the last round they reached.',
      'hint.sf':'Season averages from semi-final and final rounds only.',
      'hint.q':'Season averages from qualification rounds only.',
      'hint.all':'Obstacle, swimming and laser run averaged over every round of every competition (qualifications, semi-finals and finals). Combined is the average of the three added together, and athletes are ranked by it, highest first.',
      'hint.h2h':'Pick two athletes to compare their season side by side.',
      'ath.note':'Tap an athlete to see every round and their progress over the season. In Competition results, Semi-finals & Finals and Qualifications, athletes are ranked by the furthest round they reached first, then by points, so a finalist is always ahead of a semi-finalist. The Averages tab is ranked only by the highest combined average. Eliminations (EL) are left out of that discipline’s average, and rounds with an elimination are left out of the total average. Qualification fencing is the ranking round; semi-final and final fencing is direct elimination.',
      'prog.title':'Progress over the season', 'prog.sub':'Average points per competition',
      'prog.need2':'Progress charts appear once an athlete has results from two or more competitions.',
      'h2h.a':'First athlete', 'h2h.b':'Second athlete', 'h2h.ph':'Type a name…',
      'h2h.pick':'Choose two athletes above.', 'h2h.notFound':'Choose names from the list.',
      'h2h.season':'Season comparison', 'h2h.shared':'Competitions both entered', 'h2h.noShared':'They haven’t competed at the same competition yet.',
      'h2h.comps':'Competitions', 'h2h.finals':'Finals reached', 'h2h.bestRank':'Best final rank',
      'h2h.fq':'Fencing (qualification)', 'h2h.fd':'Fencing (semi/final)', 'h2h.tq':'Total (qualification)', 'h2h.tsf':'Total (semi/final)',
      'h2h.avgNote':'Averages per round. Obstacle, swim and laser run use every round. The better value is highlighted.',
      'h2h.lastRound':'Last round reached',

      /* season bests */
      'b.title':'Season bests 2026',
      'b.sub':'The best performances of the 2026 season. Each athlete appears once per list, with their best result.',
      'b.o':'Fastest obstacle', 'b.s':'Fastest swim', 'b.l':'Fastest laser run', 'b.f':'Best fencing ranking round', 'b.t':'Highest total in a round',
      'b.time':'Time', 'b.comp':'Competition', 'b.wins':'Win rate', 'b.none':'No results.',
      'b.note':'Obstacle courses and laser run courses differ between venues, and swims took place in both 25m and 50m pools, so times are not perfectly comparable. Fencing win rate is ranking-round victories divided by bouts.',


      /* finals level */
      'f.title':'Finals level',
      'f.sub':'The average of every finalist across the {n} competitions of 2026. Enter your personal bests to see how far you are from final level and how much you need to improve.',
      'f.basis':'Based on {n} final performances: {list}.',
      'f.avg':'Finals average', 'f.yours':'Your personal best', 'f.wr':'win rate', 'f.yourV':'Your victories', 'f.yourD':'Your defeats', 'f.fSeed':'Finalists’ seeding round record: {v}V–{d}D on average.', 'f.needW':'In a 35-bout pool that’s about {n} more victories.', 'f.needW1':'In a 35-bout pool that’s about 1 more victory.', 'f.aheadW1':'In a 35-bout pool that’s about 1 victory more.', 'f.aheadW':'In a 35-bout pool that’s about {n} victories more.', 'f.three':'Obstacle + Swim + Laser Run', 'f.threeHint':'Fill in obstacle, swim and laser run to compare your combined points with the finals average.',
      'f.faster':'{p}% faster than the finals average', 'f.slower':'{p}% slower than the finals average',
      'f.above':'{p}% above the finals average', 'f.below':'{p}% below the finals average', 'f.equal':'Right on the finals average',
      'f.needT':'You need to be {s} s faster to reach it.', 'f.aheadT':'You are {s} s ahead of it.',
      'f.needP':'You need {s} more points to reach it.', 'f.aheadP':'You are {s} points ahead of it.',
      'f.youScore':'That’s {n} points; the finals average is {a}.',
      'f.total':'Your total', 'f.totalHint':'Fill in all four to compare your total with the finals average.',
      'f.byComp':'Finals average by competition', 'f.all':'All competitions',
      'f.fencingNote':'Finals fencing points are set by direct-elimination place, so the comparison uses the seeding round win rate instead. Enter your victories and defeats from a ranking round.',
      'f.note':'Averages leave out eliminations. In obstacle, swimming and laser run a lower time is better. Courses and pools differ between venues, so treat the comparison as a guide.',

      /* sharing */
      'share':'Share', 'share.copied':'Link copied', 'share.athlete':'Share this athlete', 'share.h2h':'Share this comparison',

      /* nations */
      'n.title':'Nations', 'n.sub':'Medals, finalists and semi-finalists by nation across the {n} competitions of 2026.',
      'n.all':'All', 'n.nation':'Nation', 'n.gold':'Gold', 'n.silver':'Silver', 'n.bronze':'Bronze', 'n.medals':'Medals',
      'n.finals':'Finals', 'n.semis':'Semi-finals', 'n.athletes':'Athletes',
      'n.note':'Medals are the top three in each individual final. Finals and semi-finals count every appearance (one athlete at five finals counts five). Each result counts for the nation the athlete represented at that competition. Tap a nation to see its athletes.',
      'n.seeAll':'See {c} athletes →', 'n.best':'Best result', 'n.neutral':'Neutral athletes',

      /* training log */
      'log.title':'Training log', 'log.sub':'Write down what you trained in each discipline and keep count of your sessions this month and this year. Everything stays on this device.',
      'log.add':'Add a training', 'log.edit':'Edit training', 'log.date':'Date', 'log.disc':'Discipline', 'log.what':'What did you train?',
      'log.whatPh':'e.g. 10×100 m freestyle on 1:30, 400 m easy', 'log.mins':'Duration (minutes, optional)',
      'log.save':'Save training', 'log.saveEdit':'Save changes', 'log.cancel':'Cancel', 'log.saved':'Saved.', 'log.needDisc':'Choose a discipline.', 'log.needWhat':'Write what you trained.',
      'disc.fen':'Fencing', 'disc.obs':'Obstacle', 'disc.swim':'Swimming', 'disc.shoot':'Shooting', 'disc.run':'Running', 'disc.lr':'Laser Run', 'disc.other':'Other',
      'disc.otherHint':'gym, mobility…',
      'log.counts':'Training count', 'log.thisMonth':'{n} this month', 'log.thisYear':'in {y} in total', 'log.allDisc':'All trainings', 'log.minsMonth':'{m} min this month',
      'log.perMonth':'Trainings per month in {y}',
      'log.history':'Trainings in {m}', 'log.empty':'No trainings logged in this month yet.', 'log.delete':'Delete', 'log.editBtn':'Edit', 'log.confirmDel':'Delete this training?',
      'log.min':'{m} min', 'log.prev':'Previous month', 'log.next':'Next month',
      'log.backup':'Backup', 'log.backupHint':'Your log is saved only in this browser. Download a backup file now and then, and load it on another device to move your log.',
      'log.export':'Download backup', 'log.import':'Load backup', 'log.imported':'Loaded {n} trainings.', 'log.badFile':'That file isn’t a valid backup.',
      /* about */
      'about.title':'About this site',
      'about.p1':'I created this site because there was no single place to see athletes’ average performances across a season. Official results show each competition on its own, but averages reveal much more: how consistent an athlete is, where their strengths lie, and which disciplines offer the most room for improvement.',
      'about.p2':'My aim is to make these numbers easy to explore, so athletes and coaches can use them to set realistic goals and plan future training.',
      'about.p3':'The results come from official UIPM result exports and are updated after each competition. If you notice an error or have an idea for the site, I’d be glad to hear from you.',
      'about.contact':'Contact', 'about.insta':'Instagram', 'about.email':'Email',

      /* home */
      'home.by':'by Tárkányi Zsombor',
      'home.calcT':'Points calculator', 'home.calcP':'Enter your fencing, obstacle, swimming and laser run results and see your total. Works for qualification and for semi-finals and finals.', 'home.calcA':'Open the calculator →',
      'home.athT':'Athlete results', 'home.athP':'Official standings from every competition, each athlete’s rounds, season averages and head-to-head comparisons.', 'home.athA':'See the results →',
      'home.bestT':'Season bests', 'home.bestP':'The fastest obstacle, swim and laser run of 2026, the best fencing and the highest totals.', 'home.bestA':'See the bests →',
      'home.how':'How scoring works',
      'home.f':'In qualification, winning <b>70% of your bouts = 250 points</b>. In semi-finals and finals it’s direct elimination, and <b>1st place = 250</b>.',
      'home.o':'Faster is better: <b>every second = 3 points</b>. A 30-second run scores 355.',
      'home.s':'100m freestyle. <b>1:10.00 = 250 points</b>, and every second faster or slower is worth 5 points.',
      'home.l':'Shooting and running combined. <b>10:00 = 700 points</b>, and every second is worth 1 point.',
      'footer':'Results come from official UIPM result exports. This is an independent site and is not affiliated with UIPM.',

      /* calculator */
      'c.title':'Modern Pentathlon Points Calculator', 'c.sub':'Enter your results. Points update as you type.',
      'c.q':'Qualification', 'c.de':'Semi-final / Final', 'c.total':'Total points', 'c.count':'{n} of 4 events entered',
      'c.fq':'Fencing (ranking round)', 'c.fde':'Fencing (direct elimination)',
      'c.v':'Victories', 'c.d':'Defeats', 'c.w':'Points per victory', 'c.pen':'Penalty points', 'c.auto':'auto',
      'c.dePlace':'Final place in direct elimination (1–18)',
      'c.oTime':'Time (e.g. 27,60 or 27.60)', 'c.swim':'Swimming (100m)', 'c.sTime':'Time (e.g. 1:01,50 or 1.01,50)', 'c.sHint':'1:10.00 = 250 points.',
      'c.lTime':'Running time (e.g. 11:45,00 or 11.45,00)', 'c.lHint':'One point per second. 10:00 = 700 points.',
      'c.hEnterVD':'Enter victories and defeats. 70% of bouts won = 250 points.',
      'c.hBadVD':'Victories and defeats must be whole numbers.',
      'c.hRule':'70% of {b} bouts = {base} victories = 250 points, each victory ±{w}.',
      'c.hPen':' Minus {p} penalty points.',
      'c.hEst':' This group size didn’t appear in 2026 results, so the victory value is an estimate.',
      'c.hDE0':'Winning the final = 250 points. Athletes out in the same round are ranked by seeding.',
      'c.hDEbad':'Enter a place from 1 to 18.',
      'c.de1':'Won the final.', 'c.de2':'Lost the final.', 'c.de4':'Lost in the semi-final.', 'c.de8':'Lost in the round of 8.', 'c.de16':'Lost in the round of 16.', 'c.de32':'Lost in the round of 32.',
      'c.note':'All formulas were checked against every result from the 2026 World Cups, European Championships and World Championships. In qualification, fencing is the ranking round (70% of bouts won = 250 points); in semi-finals and finals it is direct elimination, scored by final place. A red card in the ranking round costs 10 points; enter it as penalty points.'
    },
    hu: {
      'theme.dark':'Sötét mód', 'theme.light':'Világos mód',
      'nav.home':'Főoldal', 'nav.calc':'Kalkulátor', 'nav.athletes':'Versenyzők', 'nav.bests':'Szezonlegjobbak', 'nav.final':'Döntős szint', 'nav.nations':'Nemzetek', 'nav.log':'Edzésnapló', 'nav.about':'Rólam',
      'g.W':'Nők', 'g.M':'Férfiak', 'allNations':'Minden nemzet', 'search':'Versenyző vagy nemzet keresése',
      'd.f':'Vívás', 'd.o':'Akadályfutás', 'd.s':'Úszás', 'd.l':'Lézerfutás', 'total':'Összesen', 'combined':'Együtt',
      'rounds':'Fordulók', 'rank':'Hely.', 'athlete':'Versenyző', 'place':'Hely', 'round':'Forduló', 'points':'Pont',
      'r.Q':'Selejtező', 'r.SF':'Elődöntő', 'r.F':'Döntő',
      'raw.de':'{n}. hely (EK)', 'raw.vd':'{v}GY–{d}V', 'finalRank':'végső helyezés: {n}.', 'placeShort':'{n}. hely', 'pts':'{n} pont',
      'noAthletes':'Nincs találat.',
      'competitions':'{n} verseny', 'competition1':'1 verseny',

      'ath.title':'Versenyzői eredmények 2026',
      'tab.results':'Versenyeredmények', 'tab.sf':'Elődöntők és döntők', 'tab.q':'Selejtezők', 'tab.all':'Átlagok', 'tab.h2h':'Összehasonlítás',
      'grp.F':'Döntő', 'grp.SF':'Elődöntő', 'grp.Q':'Selejtező',
      'grp.reachedF':'Döntőbe jutott', 'grp.reachedSF':'Elődöntőbe jutott', 'grp.qOnly':'Csak selejtező', 'grp.sfOnly':'Csak elődöntő', 'grp.all':'Minden versenyző',
      'hint.results':'A kiválasztott verseny hivatalos végeredménye, minden versenyzőnél az utolsó elért fordulójának pontjaival.',
      'hint.sf':'Szezonátlagok csak az elődöntőkből és döntőkből.',
      'hint.q':'Szezonátlagok csak a selejtezőkből.',
      'hint.all':'Akadályfutás, úszás és lézerfutás átlaga minden verseny minden fordulójából (selejtező, elődöntő, döntő). Az „Együtt” a három átlag összege, a sorrend ez alapján csökkenő.',
      'hint.h2h':'Válassz ki két versenyzőt, és hasonlítsd össze a szezonjukat.',
      'ath.note':'Koppints egy versenyzőre a fordulók és a szezonbeli fejlődés megtekintéséhez. A Versenyeredmények, Elődöntők és döntők és Selejtezők füleken a sorrendet először az elért legjobb forduló, utána a pontszám adja, így a döntős mindig az elődöntős előtt áll. Az Átlagok fülön kizárólag a legmagasabb átlag számít. A kizárások (EL) nem számítanak bele az adott szám átlagába, a kizárást tartalmazó fordulók pedig az összesített átlagba. A selejtező vívása körmérkőzés, az elődöntőé és a döntőé egyenes kiesés.',
      'prog.title':'Fejlődés a szezonban', 'prog.sub':'Átlagpontszám versenyenként',
      'prog.need2':'A fejlődési grafikonok akkor jelennek meg, ha a versenyzőnek legalább két versenyről van eredménye.',
      'h2h.a':'Első versenyző', 'h2h.b':'Második versenyző', 'h2h.ph':'Írj be egy nevet…',
      'h2h.pick':'Válassz ki fent két versenyzőt.', 'h2h.notFound':'A listából válassz nevet.',
      'h2h.season':'Szezon összevetés', 'h2h.shared':'Közös versenyek', 'h2h.noShared':'Még nem szerepeltek ugyanazon a versenyen.',
      'h2h.comps':'Versenyek', 'h2h.finals':'Döntők', 'h2h.bestRank':'Legjobb helyezés',
      'h2h.fq':'Vívás (selejtező)', 'h2h.fd':'Vívás (elődöntő/döntő)', 'h2h.tq':'Összesen (selejtező)', 'h2h.tsf':'Összesen (elődöntő/döntő)',
      'h2h.avgNote':'Fordulónkénti átlagok. Az akadályfutás, úszás és lézerfutás minden fordulót tartalmaz. A jobb érték ki van emelve.',
      'h2h.lastRound':'Utolsó elért forduló',

      'b.title':'Szezonlegjobbak 2026',
      'b.sub':'A 2026-os szezon legjobb teljesítményei. Minden versenyző egyszer szerepel egy listán, a legjobb eredményével.',
      'b.o':'Leggyorsabb akadályfutás', 'b.s':'Leggyorsabb úszás', 'b.l':'Leggyorsabb lézerfutás', 'b.f':'Legjobb vívás (körmérkőzés)', 'b.t':'Legmagasabb összpontszám egy fordulóban',
      'b.time':'Idő', 'b.comp':'Verseny', 'b.wins':'Győzelmi arány', 'b.none':'Nincs eredmény.',
      'b.note':'Az akadálypályák és a lézerfutó pályák helyszínenként eltérnek, és az úszás 25 és 50 méteres medencében is zajlott, ezért az idők nem teljesen összehasonlíthatók. A vívás győzelmi aránya a körmérkőzésen szerzett győzelmek és az asszók számának hányadosa.',


      'f.title':'Döntős szint',
      'f.sub':'A 2026-os szezon {n} versenyének összes döntősének átlaga. Add meg az egyéni csúcsaidat, és megmutatjuk, milyen messze vagy a döntős szinttől, és mennyit kell fejlődnöd.',
      'f.basis':'{n} döntős teljesítmény alapján: {list}.',
      'f.avg':'Döntős átlag', 'f.yours':'Egyéni csúcsod', 'f.wr':'győzelmi arány', 'f.yourV':'Győzelmeid', 'f.yourD':'Vereségeid', 'f.fSeed':'A döntősök átlagos kiemelő köre: {v}GY–{d}V.', 'f.needW':'Egy 35 asszós körben ez kb. {n} győzelemmel több.', 'f.needW1':'Egy 35 asszós körben ez kb. 1 győzelemmel több.', 'f.aheadW1':'Egy 35 asszós körben ez kb. 1 győzelemmel több.', 'f.aheadW':'Egy 35 asszós körben ez kb. {n} győzelemmel több.', 'f.three':'Akadályfutás + úszás + lézerfutás', 'f.threeHint':'Töltsd ki az akadályfutást, az úszást és a lézerfutást, hogy a három együttes pontszámát összevesd a döntős átlaggal.',
      'f.faster':'{p}%-kal gyorsabb a döntős átlagnál', 'f.slower':'{p}%-kal lassabb a döntős átlagnál',
      'f.above':'{p}%-kal a döntős átlag felett', 'f.below':'{p}%-kal a döntős átlag alatt', 'f.equal':'Pontosan a döntős átlagon',
      'f.needT':'{s} mp-cel kell gyorsabbnak lenned, hogy elérd.', 'f.aheadT':'{s} mp-cel jobb vagy nála.',
      'f.needP':'{s} ponttal többre van szükséged, hogy elérd.', 'f.aheadP':'{s} ponttal jobb vagy nála.',
      'f.youScore':'Ez {n} pont; a döntős átlag {a}.',
      'f.total':'Összpontszámod', 'f.totalHint':'Töltsd ki mind a négyet, hogy az összpontszámodat is összevesd a döntős átlaggal.',
      'f.byComp':'Döntős átlag versenyenként', 'f.all':'Összes verseny',
      'f.fencingNote':'A döntőben a vívás pontjait az egyenes kiesésben elért hely adja, ezért az összevetés a kiemelő kör győzelmi arányát használja. Add meg egy körmérkőzésed győzelmeit és vereségeit.',
      'f.note':'Az átlagok a kizárások nélkül számolnak. Akadályfutásban, úszásban és lézerfutásban a kisebb idő a jobb. A pályák és medencék helyszínenként eltérnek, ezért az összevetést tájékoztató jellegűnek tekintsd.',

      'share':'Megosztás', 'share.copied':'Link kimásolva', 'share.athlete':'Versenyző megosztása', 'share.h2h':'Összehasonlítás megosztása',

      'n.title':'Nemzetek', 'n.sub':'Érmek, döntősök és elődöntősök nemzetenként a 2026-os szezon {n} versenyén.',
      'n.all':'Mind', 'n.nation':'Nemzet', 'n.gold':'Arany', 'n.silver':'Ezüst', 'n.bronze':'Bronz', 'n.medals':'Érmek',
      'n.finals':'Döntők', 'n.semis':'Elődöntők', 'n.athletes':'Versenyzők',
      'n.note':'Érmet az egyéni döntők első három helyezettje kap. A döntőknél és elődöntőknél minden szereplés számít (egy versenyző öt döntője ötnek számít). Minden eredmény annak a nemzetnek számít, amelyet a versenyző az adott versenyen képviselt. Koppints egy nemzetre a versenyzőiért.',
      'n.seeAll':'{c} versenyzőinek megtekintése →', 'n.best':'Legjobb eredmény', 'n.neutral':'Semleges versenyzők',

      'log.title':'Edzésnapló', 'log.sub':'Írd le, mit edzettél az egyes számokban, és kövesd, hány edzésed volt ebben a hónapban és ebben az évben. Minden ezen az eszközön marad.',
      'log.add':'Edzés hozzáadása', 'log.edit':'Edzés szerkesztése', 'log.date':'Dátum', 'log.disc':'Szám', 'log.what':'Mit edzettél?',
      'log.whatPh':'pl. 10×100 m gyors 1:30-as indulással, 400 m levezetés', 'log.mins':'Időtartam (perc, nem kötelező)',
      'log.save':'Edzés mentése', 'log.saveEdit':'Változások mentése', 'log.cancel':'Mégse', 'log.saved':'Elmentve.', 'log.needDisc':'Válassz egy számot.', 'log.needWhat':'Írd le, mit edzettél.',
      'disc.fen':'Vívás', 'disc.obs':'Akadályfutás', 'disc.swim':'Úszás', 'disc.shoot':'Lövészet', 'disc.run':'Futás', 'disc.lr':'Lézerfutás', 'disc.other':'Egyéb',
      'disc.otherHint':'erősítés, mobilitás…',
      'log.counts':'Edzésszám', 'log.thisMonth':'ebben a hónapban: {n}', 'log.thisYear':'{y} összesen', 'log.allDisc':'Összes edzés', 'log.minsMonth':'{m} perc ebben a hónapban',
      'log.perMonth':'Edzések havonta ({y})',
      'log.history':'Edzések: {m}', 'log.empty':'Ebben a hónapban még nincs rögzített edzés.', 'log.delete':'Törlés', 'log.editBtn':'Szerkesztés', 'log.confirmDel':'Törlöd ezt az edzést?',
      'log.min':'{m} perc', 'log.prev':'Előző hónap', 'log.next':'Következő hónap',
      'log.backup':'Biztonsági mentés', 'log.backupHint':'A naplód csak ebben a böngészőben van elmentve. Időnként tölts le egy mentést, és ezzel másik eszközre is átviheted.',
      'log.export':'Mentés letöltése', 'log.import':'Mentés betöltése', 'log.imported':'{n} edzés betöltve.', 'log.badFile':'Ez a fájl nem érvényes mentés.',
      'about.title':'Az oldalról',
      'about.p1':'Azért hoztam létre ezt az oldalt, mert nem volt olyan hely, ahol a versenyzők szezonbeli átlageredményeit egy helyen meg lehetett volna nézni. A hivatalos eredmények minden versenyt külön mutatnak, az átlagok viszont sokkal többet elárulnak: mennyire egyenletes egy versenyző teljesítménye, hol vannak az erősségei, és mely számokban van a legtöbb fejlődési lehetőség.',
      'about.p2':'Célom, hogy ezek a számok könnyen áttekinthetők legyenek, így a versenyzők és az edzők reális célokat tűzhetnek ki, és jobban megtervezhetik a jövőbeli edzéseket.',
      'about.p3':'Az eredmények a UIPM hivatalos eredményexportjaiból származnak, és minden verseny után frissülnek. Ha hibát találsz, vagy ötleted van az oldallal kapcsolatban, örömmel fogadom.',
      'about.contact':'Kapcsolat', 'about.insta':'Instagram', 'about.email':'E-mail',

      'home.by':'készítette: Tárkányi Zsombor',
      'home.calcT':'Pontszámító', 'home.calcP':'Add meg a vívás, akadályfutás, úszás és lézerfutás eredményeidet, és megkapod az összpontszámot. Selejtezőre és elődöntőre/döntőre is működik.', 'home.calcA':'Kalkulátor megnyitása →',
      'home.athT':'Versenyzői eredmények', 'home.athP':'Minden verseny hivatalos végeredménye, a versenyzők fordulói, szezonátlagok és egymás elleni összevetések.', 'home.athA':'Eredmények megtekintése →',
      'home.bestT':'Szezonlegjobbak', 'home.bestP':'2026 leggyorsabb akadályfutásai, úszásai és lézerfutásai, a legjobb vívások és a legmagasabb összpontszámok.', 'home.bestA':'Legjobbak megtekintése →',
      'home.how':'Hogyan számolják a pontokat',
      'home.f':'Selejtezőben <b>az asszók 70%-ának megnyerése = 250 pont</b>. Elődöntőben és döntőben egyenes kiesés van, és <b>az 1. hely = 250</b>.',
      'home.o':'Minél gyorsabb, annál jobb: <b>minden másodperc = 3 pont</b>. Egy 30 másodperces futás 355 pontot ér.',
      'home.s':'100 m gyors. <b>1:10.00 = 250 pont</b>, és minden másodperc gyorsabb vagy lassabb idő 5 pontot ér.',
      'home.l':'Lövészet és futás együtt. <b>10:00 = 700 pont</b>, és minden másodperc 1 pontot ér.',
      'footer':'Az eredmények a UIPM hivatalos eredményexportjaiból származnak. Ez egy független oldal, nem áll kapcsolatban a UIPM-mel.',

      'c.title':'Öttusa pontszámító', 'c.sub':'Add meg az eredményeidet, a pontok gépelés közben frissülnek.',
      'c.q':'Selejtező', 'c.de':'Elődöntő / Döntő', 'c.total':'Összpontszám', 'c.count':'4 számból {n} megadva',
      'c.fq':'Vívás (körmérkőzés)', 'c.fde':'Vívás (egyenes kiesés)',
      'c.v':'Győzelmek', 'c.d':'Vereségek', 'c.w':'Pont győzelmenként', 'c.pen':'Büntetőpont', 'c.auto':'auto',
      'c.dePlace':'Helyezés az egyenes kiesésben (1–18)',
      'c.oTime':'Idő (pl. 27,60 vagy 27.60)', 'c.swim':'Úszás (100 m)', 'c.sTime':'Idő (pl. 1:01,50 vagy 1.01,50)', 'c.sHint':'1:10.00 = 250 pont.',
      'c.lTime':'Futóidő (pl. 11:45,00 vagy 11.45,00)', 'c.lHint':'Másodpercenként 1 pont. 10:00 = 700 pont.',
      'c.hEnterVD':'Add meg a győzelmeket és a vereségeket. Az asszók 70%-ának megnyerése = 250 pont.',
      'c.hBadVD':'A győzelmek és vereségek száma egész szám legyen.',
      'c.hRule':'{b} asszó 70%-a = {base} győzelem = 250 pont, győzelmenként ±{w}.',
      'c.hPen':' Mínusz {p} büntetőpont.',
      'c.hEst':' Ilyen csoportméret nem fordult elő a 2026-os eredményekben, ezért a győzelem értéke becslés.',
      'c.hDE0':'A döntő megnyerése = 250 pont. Az azonos körben kiesők sorrendjét a kiemelés adja.',
      'c.hDEbad':'1 és 18 közötti helyezést adj meg.',
      'c.de1':'Megnyerte a döntőt.', 'c.de2':'Kikapott a döntőben.', 'c.de4':'Kiesett az elődöntőben.', 'c.de8':'Kiesett a legjobb 8 között.', 'c.de16':'Kiesett a legjobb 16 között.', 'c.de32':'Kiesett a legjobb 32 között.',
      'c.note':'Minden képletet ellenőriztem a 2026-os világkupák, az Európa-bajnokság és a világbajnokság összes eredményén. Selejtezőben a vívás körmérkőzés (az asszók 70%-ának megnyerése = 250 pont), elődöntőben és döntőben egyenes kiesés, ahol a helyezés számít. A körmérkőzésen egy piros lap 10 pont levonással jár; ezt büntetőpontként add meg.'
    }
  };

  function detect(){
    try { const s = localStorage.getItem('lang'); if (s === 'en' || s === 'hu') return s; } catch(e){}
    return (navigator.language || '').toLowerCase().startsWith('hu') ? 'hu' : 'en';
  }
  let lang = detect();
  const listeners = [];

  function t(key, vars){
    let s = (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;
    if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
    return s;
  }


  // Country names (IOC codes) in English and Hungarian
  const NATIONS = {
    AFG:['Afghanistan','Afganisztán'], ANA:['Neutral athletes (A)','Semleges versenyzők (A)'], ANB:['Neutral athletes (B)','Semleges versenyzők (B)'], AIN:['Individual Neutral Athletes','Egyéni semleges versenyzők'], UIPM:['UIPM athletes','UIPM versenyzők'],
    AUS:['Australia','Ausztrália'], AUT:['Austria','Ausztria'], BEL:['Belgium','Belgium'], BLR:['Belarus','Fehéroroszország'], BOL:['Bolivia','Bolívia'], BRA:['Brazil','Brazília'],
    BUL:['Bulgaria','Bulgária'], BUR:['Burkina Faso','Burkina Faso'], CAN:['Canada','Kanada'], CHN:['China','Kína'], CUB:['Cuba','Kuba'], CZE:['Czechia','Csehország'],
    ECU:['Ecuador','Ecuador'], EGY:['Egypt','Egyiptom'], ESP:['Spain','Spanyolország'], EST:['Estonia','Észtország'], FIN:['Finland','Finnország'], FRA:['France','Franciaország'],
    GBR:['Great Britain','Nagy-Britannia'], GEO:['Georgia','Grúzia'], GER:['Germany','Németország'], GRE:['Greece','Görögország'], GUA:['Guatemala','Guatemala'], HKG:['Hong Kong','Hongkong'],
    HUN:['Hungary','Magyarország'], INA:['Indonesia','Indonézia'], IND:['India','India'], IRI:['Iran','Irán'], IRL:['Ireland','Írország'], ITA:['Italy','Olaszország'],
    JPN:['Japan','Japán'], KAZ:['Kazakhstan','Kazahsztán'], KGZ:['Kyrgyzstan','Kirgizisztán'], KOR:['South Korea','Dél-Korea'], KSA:['Saudi Arabia','Szaúd-Arábia'], LBN:['Lebanon','Libanon'],
    LTU:['Lithuania','Litvánia'], MDA:['Moldova','Moldova'], MEX:['Mexico','Mexikó'], MGL:['Mongolia','Mongólia'], NEP:['Nepal','Nepál'], NZL:['New Zealand','Új-Zéland'],
    PER:['Peru','Peru'], PHI:['Philippines','Fülöp-szigetek'], PLE:['Palestine','Palesztina'], POL:['Poland','Lengyelország'], RSA:['South Africa','Dél-afrikai Köztársaság'], RUS:['Russia','Oroszország'],
    SGP:['Singapore','Szingapúr'], SRI:['Sri Lanka','Srí Lanka'], SUI:['Switzerland','Svájc'], SVK:['Slovakia','Szlovákia'], SWE:['Sweden','Svédország'], THA:['Thailand','Thaiföld'],
    TPE:['Chinese Taipei','Kínai Tajpej'], TUR:['Türkiye','Törökország'], UKR:['Ukraine','Ukrajna'], USA:['United States','Egyesült Államok'], UZB:['Uzbekistan','Üzbegisztán'], VEN:['Venezuela','Venezuela']
  };
  const nation = c => (NATIONS[c] ? NATIONS[c][lang === 'hu' ? 1 : 0] : c);

  // Share a link: the phone's share sheet when available, otherwise copy to the clipboard
  async function share(url, title, btn){
    try { if (navigator.share){ await navigator.share({url, title}); return; } } catch(e){ if (e && e.name === 'AbortError') return; }
    try { await navigator.clipboard.writeText(url); } catch(e){
      const ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch(_){} ta.remove();
    }
    if (btn){ const old = btn.textContent; btn.textContent = t('share.copied'); setTimeout(() => btn.textContent = old, 1600); }
  }

  function apply(){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
    document.querySelectorAll('[data-i18n-html]').forEach(el => el.innerHTML = t(el.dataset.i18nHtml));
    document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
    document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.l === lang));
    paintThemeButton();
  }

  const MOON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  const SUN = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>';
  const themeListeners = [];
  function paintThemeButton(){
    const b = document.querySelector('#nav .theme'); if (!b) return;
    const dark = theme === 'dark';
    b.innerHTML = dark ? SUN : MOON;
    b.setAttribute('aria-pressed', String(dark));
    b.setAttribute('aria-label', t(dark ? 'theme.light' : 'theme.dark'));
    b.title = t(dark ? 'theme.light' : 'theme.dark');
  }
  function setTheme(v){
    theme = v;
    document.documentElement.dataset.theme = v;
    try { localStorage.setItem('theme', v); } catch(e){}
    const m = document.querySelector('meta[name="theme-color"]'); if (m) m.content = v === 'dark' ? '#05080f' : '#1d4ed8';
    paintThemeButton();
    themeListeners.forEach(fn => fn(v));
  }

  function setLang(l){
    lang = l;
    try { localStorage.setItem('lang', l); } catch(e){}
    apply();
    listeners.forEach(fn => fn(l));
  }

  // Clean addresses (Vercel serves /calculator from calculator.html)
  const PAGES = [['/','index','nav.home'],['/calculator','calculator','nav.calc'],['/athletes','athletes','nav.athletes'],['/nations','nations','nav.nations'],['/bests','bests','nav.bests'],['/finals','finals','nav.final'],['/log','log','nav.log'],['/about','about','nav.about']];

  function nav(){
    const el = document.getElementById('nav'); if (!el) return;
    const here = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
    el.innerHTML = '<div class="links">' + PAGES.map(([href, id, key]) => {
      const on = id === here;
      return '<a href="' + href + '"' + (on ? ' class="on" aria-current="page"' : '') + ' data-i18n="' + key + '"></a>';
    }).join('') + '</div><div class="tools"><button class="theme" type="button" aria-pressed="false"></button><div class="lang" role="group" aria-label="Language"><button data-l="en">EN</button><button data-l="hu">HU</button></div></div>';
    el.querySelector('.theme').addEventListener('click', () => setTheme(theme === 'dark' ? 'light' : 'dark'));
    paintThemeButton();
    const cur = el.querySelector('.links a.on');
    if (cur) requestAnimationFrame(() => { const L = el.querySelector('.links'); L.scrollLeft = Math.max(0, cur.offsetLeft - L.offsetLeft - 40); });
    el.querySelector('.lang').addEventListener('click', e => { const b = e.target.closest('button'); if (b) setLang(b.dataset.l); });
  }

  const css = document.createElement('style');
  css.textContent = ':root{--s1:#1d4ed8;--s2:#eb6834}'
    + ':root[data-theme="dark"]{--bg:#05080f;--card:#0c1220;--tint:#111a2b;--text:#e6f0ff;--muted:#93a4bd;--line:#1e2a3d;--accent:#7cc8ff;--ink:#04121f;--soft:#0e2238;--behind:#fb923c;--b:#e0632d;--s1:#4096f0;--s2:#e0632d;color-scheme:dark}'
    + ':root[data-theme="dark"] body{background:var(--bg);color:var(--text)}'
    + ':root[data-theme="dark"] .title{background:linear-gradient(100deg,#e0f2fe 0%,#7cc8ff 50%,#38bdf8 100%);-webkit-background-clip:text;background-clip:text}'
    + ':root[data-theme="dark"] .el,:root[data-theme="dark"] .err{color:#f87171}'
    + ':root[data-theme="dark"] .cmp td.win.b{color:#fdba74;background:#2a1608}:root[data-theme="dark"] .cmp th.b{color:#fdba74}'
    + ':root[data-theme="dark"] .total .k,:root[data-theme="dark"] .total .big small,:root[data-theme="dark"] .total .muted,:root[data-theme="dark"] .total small{color:rgba(4,18,31,.72)}'
    + ':root[data-theme="dark"] .total .big,:root[data-theme="dark"] .total .res .pct,:root[data-theme="dark"] .total b{color:var(--ink)}'
    + ':root[data-theme="dark"] .card,:root[data-theme="dark"] .tbl,:root[data-theme="dark"] .go a{box-shadow:none}'
    + '#nav .tools{display:flex;align-items:center;gap:6px;flex:none}'
    + '#nav .theme{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:999px;border:1px solid var(--line);background:var(--card);color:var(--muted);cursor:pointer;padding:0}'
    + '#nav .theme:hover{color:var(--accent);border-color:var(--accent)}'
    + '#nav .theme:focus-visible,#nav .lang button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}'
    + '#nav{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:18px;flex-wrap:wrap}'
    + '#nav .links{display:flex;flex-wrap:wrap;gap:2px}'
    + '#nav .links a{padding:7px 12px;border-radius:999px;color:var(--muted);text-decoration:none;font-weight:600;font-size:.88rem;white-space:nowrap}'
    + '#nav .links a:hover{color:var(--accent)}'
    + '#nav .links a.on{background:var(--accent);color:var(--ink)}'
    + '#nav .lang{display:inline-flex;border:1px solid var(--line);border-radius:999px;padding:2px;background:var(--card)}'
    + '#nav .lang button{border:0;background:none;font:inherit;font-size:.75rem;font-weight:700;color:var(--muted);padding:5px 10px;border-radius:999px;cursor:pointer}'
    + '#nav .lang button.on{background:var(--soft);color:var(--accent)}'
    + '@media (max-width:640px){#nav{flex-wrap:nowrap;margin:0 -12px 16px;padding:0 12px}'
    + '#nav .links{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch;min-width:0;'
    + '-webkit-mask-image:linear-gradient(90deg,#000 85%,transparent);mask-image:linear-gradient(90deg,#000 85%,transparent);padding-right:18px}'
    + '#nav .links::-webkit-scrollbar{display:none}'
    + '#nav .links a{padding:6px 10px;font-size:.84rem}#nav .lang,#nav .tools{flex:none}}';
  document.head.appendChild(css);

  window.SITE = { t, nation, share, get lang(){ return lang; }, get theme(){ return theme; }, onLang: fn => listeners.push(fn), onTheme: fn => themeListeners.push(fn), apply,
    color: name => getComputedStyle(document.documentElement).getPropertyValue(name).trim() };
  document.addEventListener('DOMContentLoaded', () => { nav(); apply(); });
})();
