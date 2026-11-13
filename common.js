/* Shared code for every page: menu, English/Hungarian switch, light/dark mode, translations. */
(function(){
  let theme = 'light';
  try { if (localStorage.getItem('theme') === 'dark') theme = 'dark'; } catch(e){}
  document.documentElement.dataset.theme = theme;

  const I18N = {
    en: {
      'theme.dark':'Dark mode', 'theme.light':'Light mode',
      'nav.home':'Home', 'nav.calc':'Calculator', 'nav.athletes':'Athletes', 'nav.bests':'Bests', 'nav.final':'Finals level', 'nav.nations':'Nations', 'nav.rank':'Ranking', 'nav.next':'Next event', 'nav.log':'Log', 'nav.about':'About',
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

      /* relays */
      'tab.relay':'Relays', 'g.X':'Mixed', 'rel.team':'Team', 'rel.gap':'Gap', 'rel.none':'No relays at this competition.',
      'hint.relay':'Relay results from the competitions that held relays. Each team is two athletes; tap a name to see their individual results.',
      'rel.nh':'not held', 'rel.noteObs':'There was no obstacle in this relay.',
      'updated':'Results last updated: {d}',

      /* world ranking */
      'wr.title':'World ranking', 'wr.sub':'The official UIPM senior Pentathlon World Ranking.',
      'wr.basis':'Counts competitions up to {d} (latest: Asian Games, Aichi-Nagoya). Copied from uipmworld.org on {r}.',
      'wr.source':'Official source', 'wr.points':'Points', 'wr.best':'Best 2026 result on this site', 'wr.count':'{n} athletes ranked',
      'wr.note':'Ranking points are calculated by UIPM from the competitions listed on the official page, including events this site has no results files for (World Cup Final, Asian Games, continental championships). Tap a name to see their results here.',

      /* next competition */
      'nx.title':'Next competition', 'nx.next':'Next up', 'nx.now':'Happening now', 'nx.d':'days', 'nx.h':'hours', 'nx.m':'minutes', 'nx.s':'seconds',
      'nx.starts':'Starts {d}', 'nx.ics':'Add to calendar', 'nx.coming':'Coming up', 'nx.tba':'Dates to be announced', 'nx.inDays':'in {n} days', 'nx.tomorrow':'tomorrow',
      'nx.updates':'Updates', 'nx.results':'Results on this site last updated: {d}', 'nx.latest':'Latest results: {e}',
      'nx.cal':'Calendar last checked: {d}, from the official UIPM calendar.', 'nx.calSrc':'UIPM calendar',
      'nx.none':'No upcoming competitions in the calendar yet.',
      /* about */
      'about.title':'About this site',
      'about.p1':'I created this site because there was no single place to see athletes’ average performances across a season. Official results show each competition on its own, but averages reveal much more: how consistent an athlete is, where their strengths lie, and which disciplines offer the most room for improvement.',
      'about.p2':'My aim is to make these numbers easy to explore, so athletes and coaches can use them to set realistic goals and plan future training.',
      'about.p3':'The results come from official UIPM result exports and are updated after each competition. If you notice an error or have an idea for the site, I’d be glad to hear from you.',
      'about.contact':'Contact', 'about.insta':'Instagram', 'about.email':'Email',

      /* home */
      'la.k':'Olympic Games · Los Angeles 2028', 'la.t':'Modern Pentathlon', 'la.where':'15–18 July 2028 · Valley Complex, Los Angeles', 'la.until':'until the first event', 'la.now':'The Olympic competition is on', 'la.done':'The Olympic competition has finished', 'la.ws':'Women’s semi-final', 'la.ms':'Men’s semi-final', 'la.wf':'Women’s final', 'la.mf':'Men’s final', 'la.la':'LA', 'la.you':'your time',
      'pc.do':'What you do', 'pc.ff':'Fun fact', 'pc.hint':'Hover over or tap a discipline to learn more', 'pc.fen.do':'Épée duels where one hit wins. Qualification: everyone fences everyone. Semi-final and final: direct elimination.', 'pc.fen.ff':'Before electric scoring, the épée tip was dipped in coloured ink, so every touch left a mark on the white jacket.', 'pc.obs.do':'Sprint through a ninja-style course of walls, bars and rings. 15.00 s = 400 points.', 'pc.obs.ff':'It replaced horse riding, part of the sport since 1912. LA 2028 will be its Olympic debut.', 'pc.swim.do':'100 m freestyle. 1:10.00 = 250 points, and every 0.2 s is worth one point.', 'pc.swim.ff':'The sport is based on the legend of a soldier behind enemy lines who had to ride, fight, shoot, swim and run.', 'pc.shoot.do':'Laser pistol at 10 m: hit 5 targets as fast as you can, with at most 50 seconds at the range each time.', 'pc.shoot.ff':'At the 1912 Olympics, future US general George S. Patton finished 5th. Shooting was his weakest event.', 'pc.run.do':'The laser run finale has a handicap start: the leader sets off first, so whoever crosses the line first wins.', 'pc.run.ff':'Running and shooting have been one event since 2009, so you aim with a racing heart.',
      'menu':'Menu', 'menu.close':'Close menu', 'top':'Back to top', 'dn.home':'Home', 'dn.calc':'Points calculator', 'dn.athletes':'Athletes & results', 'dn.rank':'World ranking', 'dn.nations':'Nations', 'dn.bests':'Season bests', 'dn.final':'Finals level', 'dn.next':'Next competition', 'dn.log':'Training log', 'dn.about':'About',
      'fol.follow':'Follow', 'fol.following':'Following', 'fol.filter':'Following', 'fol.aria':'Follow {n}', 'fol.ariaOff':'Stop following {n}', 'fol.none':'You are not following anyone in this list yet. Tap ☆ next to a name to follow an athlete.', 'fol.title':'My athletes', 'fol.invite':'Tap ☆ next to any athlete on the Athletes page and they will show up here, with their latest and best results.', 'fol.go':'Find athletes', 'fol.best':'Best finish', 'fol.last':'Latest', 'fol.profile':'Profile', 'sp.title':'Strength profile', 'sp.sub':'Compared with all {g} who competed in 2026. A longer bar means better than more of the field; the line marks the middle of the field.', 'sp.gW':'women', 'sp.gM':'men', 'sp.top':'Top {p}%', 'sp.bottom':'Bottom {p}%', 'sp.mid':'Middle of the field', 'sp.rank':'#{r} of {n}', 'sp.win':'{p}% of bouts won', 'sp.avg':'average {t}', 'sp.best':'Strongest', 'sp.grow':'Most room to grow', 'sp.na':'no result yet', 'rel.place':'#{n}',
      'home.by':'by Tárkányi Zsombor', 'home.tag':'Points calculator · 2026 results · Season averages · Finals level',
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
      'nav.home':'Főoldal', 'nav.calc':'Kalkulátor', 'nav.athletes':'Versenyzők', 'nav.bests':'Legjobbak', 'nav.final':'Döntősök', 'nav.nations':'Nemzetek', 'nav.rank':'Ranglista', 'nav.next':'Következő', 'nav.log':'Napló', 'nav.about':'Rólam',
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

      'tab.relay':'Váltók', 'g.X':'Vegyes', 'rel.team':'Csapat', 'rel.gap':'Hátrány', 'rel.none':'Ezen a versenyen nem volt váltó.',
      'hint.relay':'Váltóeredmények azokról a versenyekről, ahol volt váltó. Minden csapat két versenyzőből áll; koppints egy névre az egyéni eredményekért.',
      'rel.nh':'nem volt', 'rel.noteObs':'Ebben a váltóban nem volt akadályfutás.',
      'updated':'Eredmények utolsó frissítése: {d}',

      'wr.title':'Világranglista', 'wr.sub':'A UIPM hivatalos felnőtt öttusa-világranglistája.',
      'wr.basis':'A {d}-ig tartott versenyeket számolja (utolsó: Ázsiai Játékok, Aicsi-Nagoja). A uipmworld.org oldalról átvéve: {r}.',
      'wr.source':'Hivatalos forrás', 'wr.points':'Pont', 'wr.best':'Legjobb 2026-os eredmény az oldalon', 'wr.count':'{n} rangsorolt versenyző',
      'wr.note':'A ranglistapontokat a UIPM számolja a hivatalos oldalon felsorolt versenyekből, olyanokból is, amelyekről ezen az oldalon nincs eredményfájl (Világkupa-döntő, Ázsiai Játékok, kontinensbajnokságok). Koppints egy névre az itteni eredményeiért.',

      'nx.title':'Következő verseny', 'nx.next':'Következő', 'nx.now':'Most zajlik', 'nx.d':'nap', 'nx.h':'óra', 'nx.m':'perc', 'nx.s':'másodperc',
      'nx.starts':'Kezdés: {d}', 'nx.ics':'Hozzáadás a naptárhoz', 'nx.coming':'Közelgő versenyek', 'nx.tba':'Időpont később', 'nx.inDays':'{n} nap múlva', 'nx.tomorrow':'holnap',
      'nx.updates':'Frissítések', 'nx.results':'Az eredmények utolsó frissítése: {d}', 'nx.latest':'Legutóbbi eredmények: {e}',
      'nx.cal':'A versenynaptár utolsó ellenőrzése: {d}, a UIPM hivatalos naptára alapján.', 'nx.calSrc':'UIPM naptár',
      'nx.none':'Még nincs közelgő verseny a naptárban.',
      'about.title':'Az oldalról',
      'about.p1':'Azért hoztam létre ezt az oldalt, mert nem volt olyan hely, ahol a versenyzők szezonbeli átlageredményeit egy helyen meg lehetett volna nézni. A hivatalos eredmények minden versenyt külön mutatnak, az átlagok viszont sokkal többet elárulnak: mennyire egyenletes egy versenyző teljesítménye, hol vannak az erősségei, és mely számokban van a legtöbb fejlődési lehetőség.',
      'about.p2':'Célom, hogy ezek a számok könnyen áttekinthetők legyenek, így a versenyzők és az edzők reális célokat tűzhetnek ki, és jobban megtervezhetik a jövőbeli edzéseket.',
      'about.p3':'Az eredmények a UIPM hivatalos eredményexportjaiból származnak, és minden verseny után frissülnek. Ha hibát találsz, vagy ötleted van az oldallal kapcsolatban, örömmel fogadom.',
      'about.contact':'Kapcsolat', 'about.insta':'Instagram', 'about.email':'E-mail',

      'la.k':'Olimpiai játékok · Los Angeles 2028', 'la.t':'Öttusa', 'la.where':'2028. július 15–18. · Valley Complex, Los Angeles', 'la.until':'az első versenyszámig', 'la.now':'Zajlik az olimpiai verseny', 'la.done':'Az olimpiai verseny véget ért', 'la.ws':'Női elődöntő', 'la.ms':'Férfi elődöntő', 'la.wf':'Női döntő', 'la.mf':'Férfi döntő', 'la.la':'LA', 'la.you':'nálad',
      'pc.do':'Mi a feladat', 'pc.ff':'Érdekesség', 'pc.hint':'Vidd fölé az egeret, vagy koppints egy számra a részletekért', 'pc.fen.do':'Párbajtőr, egy találatig tartó asszók. Selejtezőben mindenki mindenkivel vív, elődöntőben és döntőben egyenes kiesés.', 'pc.fen.ff':'Az elektromos találatjelzés előtt a párbajtőr hegyét színes festékbe mártották, így minden találat nyomot hagyott a fehér ruhán.', 'pc.obs.do':'Sprint egy ninja-stílusú pályán falakon, rudakon és gyűrűkön át. 15,00 mp = 400 pont.', 'pc.obs.ff':'A lovaglást váltotta, amely 1912 óta része volt a sportágnak. Olimpián 2028-ban, Los Angelesben mutatkozik be.', 'pc.swim.do':'100 m gyors. 1:10,00 = 250 pont, és minden 0,2 mp egy pontot ér.', 'pc.swim.ff':'A sportág egy legendán alapul: egy katonának az ellenséges vonalak mögött lovagolnia, harcolnia, lőnie, úsznia és futnia kellett.', 'pc.shoot.do':'Lézerpisztoly 10 méterről: 5 találat minél gyorsabban, lőállásonként legfeljebb 50 másodperc alatt.', 'pc.shoot.ff':'Az 1912-es olimpián a későbbi amerikai tábornok, George S. Patton ötödik lett. A lövészet volt a leggyengébb száma.', 'pc.run.do':'A lézerfutás a befejező szám, hendikeprajttal: az éllovas indul elsőként, így aki elsőként ér célba, az nyer.', 'pc.run.ff':'A futás és a lövészet 2009 óta egy szám, így zakatoló szívvel kell célozni.',
      'menu':'Menü', 'menu.close':'Menü bezárása', 'top':'Vissza a tetejére', 'dn.home':'Főoldal', 'dn.calc':'Pontszámító', 'dn.athletes':'Versenyzők és eredmények', 'dn.rank':'Világranglista', 'dn.nations':'Nemzetek', 'dn.bests':'Szezon legjobbjai', 'dn.final':'Döntős szint', 'dn.next':'Következő verseny', 'dn.log':'Edzésnapló', 'dn.about':'Rólam',
      'fol.follow':'Követés', 'fol.following':'Követed', 'fol.filter':'Követettek', 'fol.aria':'{n} követése', 'fol.ariaOff':'{n} követésének megszüntetése', 'fol.none':'Ebben a listában még senkit sem követsz. Koppints a ☆ jelre egy név mellett.', 'fol.title':'Követett versenyzőim', 'fol.invite':'Koppints a ☆ jelre bármelyik versenyző mellett a Versenyzők oldalon, és itt látod majd a legutóbbi és legjobb eredményeiket.', 'fol.go':'Versenyzők keresése', 'fol.best':'Legjobb helyezés', 'fol.last':'Legutóbb', 'fol.profile':'Profil', 'sp.title':'Erősségprofil', 'sp.sub':'A 2026-ban versenyző összes {g} között. Hosszabb sáv = a mezőny nagyobb részénél jobb; a vonal a mezőny közepét jelzi.', 'sp.gW':'nő', 'sp.gM':'férfi', 'sp.top':'Legjobb {p}%', 'sp.bottom':'Utolsó {p}%', 'sp.mid':'Mezőny közepe', 'sp.rank':'{n}-ből {r}.', 'sp.win':'az asszók {p}%-a megnyerve', 'sp.avg':'átlag {t}', 'sp.best':'Legerősebb', 'sp.grow':'Legtöbb fejlődési lehetőség', 'sp.na':'még nincs eredmény', 'rel.place':'{n}.',
      'home.by':'készítette: Tárkányi Zsombor', 'home.tag':'Pontszámító · 2026-os eredmények · Szezonátlagok · Döntős szint',
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
    SGP:['Singapore','Szingapúr'], ARG:['Argentina','Argentína'], PAN:['Panama','Panama'], DOM:['Dominican Republic','Dominikai Köztársaság'], KUW:['Kuwait','Kuvait'],
    MAS:['Malaysia','Malajzia'], UAE:['United Arab Emirates','Egyesült Arab Emírségek'], SRI:['Sri Lanka','Srí Lanka'], SUI:['Switzerland','Svájc'], SVK:['Slovakia','Szlovákia'], SWE:['Sweden','Svédország'], THA:['Thailand','Thaiföld'],
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
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); el.title = t(el.dataset.i18nAria); });
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
  const PAGES = [['/','index','dn.home','home'],['/calculator','calculator','dn.calc','calc','shoot'],['/athletes','athletes','dn.athletes','people','run'],['/rankings','rankings','dn.rank','trophy','fen'],['/nations','nations','dn.nations','flag','swim'],['/bests','bests','dn.bests','star','obs'],['/finals','finals','dn.final','target','fen'],['/next','next','dn.next','clock'],['/log','log','dn.log','book','run'],['/about','about','dn.about','info','swim']];
  const ICON = {
    home:'<path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 9.8V20h13V9.8"/><path d="M10 20v-5.5h4V20"/>',
    calc:'<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M8.5 7.5h7"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"/>',
    people:'<circle cx="9" cy="8.5" r="3.2"/><path d="M3 20c0-3.3 2.7-5.8 6-5.8s6 2.5 6 5.8"/><circle cx="17" cy="9.5" r="2.4"/><path d="M15.8 14.4c2.9.3 5.2 2.6 5.2 5.6"/>',
    trophy:'<path d="M8 4h8v5.5a4 4 0 0 1-8 0V4z"/><path d="M8 6H5.2a3 3 0 0 0 3.1 4.2M16 6h2.8a3 3 0 0 1-3.1 4.2"/><path d="M12 13.5V17M8.5 20.5h7M10 17h4"/>',
    flag:'<path d="M5.5 21V4"/><path d="M5.5 4.5h11l-2.2 4 2.2 4h-11"/>',
    star:'<path d="m12 3.5 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/>',
    target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
    clock:'<circle cx="12" cy="12.5" r="8"/><path d="M12 8.5v4.2l2.8 1.8M9.5 2.5h5"/>',
    book:'<path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5z"/><path d="M5 19.5A1.5 1.5 0 0 0 6.5 21H19M9 7.5h6M9 11h4"/>',
    info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.2M12 7.8h.01"/>',
    menu:'<path d="M4 7h16M4 12h16M4 17h10"/>', close:'<path d="M6 6l12 12M18 6 6 18"/>', up:'<path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/>'
  };
  const ico = (k, sz) => '<svg viewBox="0 0 24 24" width="' + (sz || 20) + '" height="' + (sz || 20) + '" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + ICON[k] + '</svg>';
  // the illustrated athletes from the homepage, reused in banners, the menu and the background
  const ART = {"fen": "<svg focusable=\"false\" viewBox=\"0 0 200 236\"><ellipse cx=\"100\" cy=\"206\" rx=\"74\" ry=\"7\" fill=\"#0b1b5a\" opacity=\".28\"/><rect x=\"14\" y=\"200\" width=\"172\" height=\"5\" rx=\"2.5\" fill=\"#fff\" opacity=\".35\"/><g stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"><!-- back arm (raised) --><path d=\"M92 104 L72 88 L64 66\" stroke=\"#eef2ff\" stroke-width=\"13\"/><circle cx=\"63\" cy=\"63\" r=\"6.5\" fill=\"#1f2937\" stroke=\"none\"/><!-- back leg --><path d=\"M86 140 L62 168 L40 196\" stroke=\"#f8fafc\" stroke-width=\"15\"/><!-- front leg (lunge) --><path d=\"M90 140 L128 152 L136 196\" stroke=\"#f8fafc\" stroke-width=\"15\"/><!-- torso --><path d=\"M88 140 L98 100\" stroke=\"#ffffff\" stroke-width=\"30\"/><!-- front arm + épée --><path d=\"M100 104 L124 110 L148 110\" stroke=\"#eef2ff\" stroke-width=\"12\"/><path d=\"M152 110 L194 104\" stroke=\"#cbd5e1\" stroke-width=\"3\"/></g><circle cx=\"150\" cy=\"110\" r=\"7\" fill=\"#e2e8f0\"/><circle cx=\"148\" cy=\"110\" r=\"5.5\" fill=\"#1f2937\"/><!-- shoes --><ellipse cx=\"38\" cy=\"198\" rx=\"11\" ry=\"5\" fill=\"#1e293b\"/><ellipse cx=\"141\" cy=\"198\" rx=\"11\" ry=\"5\" fill=\"#1e293b\"/><!-- mask --><path d=\"M91 86 Q90 62 108 60 Q124 60 124 80 Q123 92 108 96 Z\" fill=\"#334155\"/><path d=\"M110 64 V92 M116 66 V90 M104 64 V93 M98 70 L122 70 M96 78 L124 78 M97 86 L122 86\" stroke=\"#64748b\" stroke-width=\"1.4\"/><path d=\"M94 88 Q104 100 118 94 L112 104 Q100 106 94 98Z\" fill=\"#fff\"/><!-- lamé stripe accent --><path d=\"M86 128 L100 106\" stroke=\"#3b82f6\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".7\"/></svg>", "obs": "<svg focusable=\"false\" viewBox=\"0 0 200 236\"><ellipse cx=\"104\" cy=\"206\" rx=\"70\" ry=\"7\" fill=\"#0b1b5a\" opacity=\".28\"/><!-- obstacle box --><rect x=\"62\" y=\"146\" width=\"84\" height=\"58\" rx=\"8\" fill=\"#fbbf24\"/><path d=\"M62 166 H146 M62 186 H146\" stroke=\"#f59e0b\" stroke-width=\"5\"/><rect x=\"62\" y=\"146\" width=\"84\" height=\"10\" rx=\"5\" fill=\"#fde68a\"/><g stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"><!-- trailing leg --><path d=\"M96 104 L72 112 L56 96\" stroke=\"#0f172a\" stroke-width=\"15\"/><path d=\"M72 112 L56 96\" stroke=\"#c68642\" stroke-width=\"12\"/><!-- back arm --><path d=\"M116 78 L100 92 L92 112\" stroke=\"#c68642\" stroke-width=\"11\"/><!-- torso --><path d=\"M98 104 L120 74\" stroke=\"#22d3ee\" stroke-width=\"28\"/><!-- lead leg --><path d=\"M100 106 L136 112 L166 106\" stroke=\"#0f172a\" stroke-width=\"15\"/><path d=\"M140 112 L166 106\" stroke=\"#c68642\" stroke-width=\"12\"/><!-- front arm on the box --><path d=\"M122 80 L128 104 L120 140\" stroke=\"#c68642\" stroke-width=\"11\"/></g><ellipse cx=\"54\" cy=\"92\" rx=\"10\" ry=\"5.5\" transform=\"rotate(-50 54 92)\" fill=\"#f97316\"/><ellipse cx=\"172\" cy=\"104\" rx=\"11\" ry=\"5.5\" transform=\"rotate(-10 172 104)\" fill=\"#f97316\"/><!-- head --><circle cx=\"132\" cy=\"56\" r=\"14\" fill=\"#c68642\"/><path d=\"M118 54 Q120 38 136 40 Q148 44 145 56 Q138 46 124 50Z\" fill=\"#1f2937\"/><!-- motion lines --><path d=\"M22 80 H44 M14 100 H38 M24 120 H42\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".45\"/></svg>", "swim": "<svg focusable=\"false\" viewBox=\"0 0 200 236\"><defs><linearGradient id=\"wb\" x1=\"0\" y1=\"140\" x2=\"0\" y2=\"236\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#38bdf8\" stop-opacity=\".6\"/><stop offset=\"1\" stop-color=\"#38bdf8\" stop-opacity=\"0\"/></linearGradient><linearGradient id=\"wf\" x1=\"0\" y1=\"150\" x2=\"0\" y2=\"236\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#0ea5e9\" stop-opacity=\".9\"/><stop offset=\".55\" stop-color=\"#0ea5e9\" stop-opacity=\".55\"/><stop offset=\"1\" stop-color=\"#0ea5e9\" stop-opacity=\"0\"/></linearGradient></defs><!-- water back layer --><path d=\"M0 150 Q25 138 50 150 T100 150 T150 150 T200 150 V236 H0Z\" fill=\"url(#wb)\"/><g stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"><!-- legs kicking --><path d=\"M70 150 L40 142\" stroke=\"#1e3a8a\" stroke-width=\"13\"/><path d=\"M70 154 L42 162\" stroke=\"#1e3a8a\" stroke-width=\"13\"/><path d=\"M42 142 L26 138 M42 162 L28 168\" stroke=\"#f1c27d\" stroke-width=\"10\"/><!-- body --><path d=\"M72 152 L124 146\" stroke=\"#1e3a8a\" stroke-width=\"26\"/><!-- recovering arm over the water --><path d=\"M120 140 L112 104 L150 92\" stroke=\"#f1c27d\" stroke-width=\"11\"/></g><!-- head with cap & goggles --><circle cx=\"140\" cy=\"142\" r=\"14\" fill=\"#f1c27d\"/><path d=\"M126 140 Q128 124 144 126 Q156 130 154 140 Z\" fill=\"#f97316\"/><rect x=\"142\" y=\"139\" width=\"12\" height=\"6\" rx=\"3\" fill=\"#0f172a\"/><!-- water front layer --><path d=\"M0 160 Q20 150 40 160 T80 160 T120 160 T160 160 T200 160 V236 H0Z\" fill=\"url(#wf)\"/><path d=\"M0 160 Q20 150 40 160 T80 160 T120 160 T160 160 T200 160\" stroke=\"#bae6fd\" stroke-width=\"3\" fill=\"none\" opacity=\".9\"/><!-- splash --><circle cx=\"26\" cy=\"132\" r=\"4\" fill=\"#e0f2fe\"/><circle cx=\"18\" cy=\"144\" r=\"3\" fill=\"#e0f2fe\"/><circle cx=\"34\" cy=\"122\" r=\"2.5\" fill=\"#e0f2fe\"/><circle cx=\"160\" cy=\"88\" r=\"3\" fill=\"#e0f2fe\" opacity=\".9\"/><circle cx=\"168\" cy=\"98\" r=\"2.2\" fill=\"#e0f2fe\" opacity=\".9\"/></svg>", "shoot": "<svg focusable=\"false\" viewBox=\"0 0 200 236\"><ellipse cx=\"86\" cy=\"206\" rx=\"44\" ry=\"7\" fill=\"#0b1b5a\" opacity=\".28\"/><!-- target --><rect x=\"166\" y=\"96\" width=\"4\" height=\"110\" rx=\"2\" fill=\"#e2e8f0\" opacity=\".7\"/><circle cx=\"168\" cy=\"96\" r=\"22\" fill=\"#fff\"/><circle cx=\"168\" cy=\"96\" r=\"15\" fill=\"#0f172a\"/><circle cx=\"168\" cy=\"96\" r=\"8\" fill=\"#fff\"/><circle cx=\"168\" cy=\"96\" r=\"3.5\" fill=\"#22c55e\"/><!-- laser beam --><path d=\"M118 98 L146 97\" stroke=\"#f43f5e\" stroke-width=\"2.5\" stroke-dasharray=\"5 4\" stroke-linecap=\"round\"/><g stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"><!-- legs --><path d=\"M80 146 L72 176 L68 198\" stroke=\"#0f172a\" stroke-width=\"15\"/><path d=\"M86 146 L94 176 L98 198\" stroke=\"#0f172a\" stroke-width=\"15\"/><path d=\"M72 176 L68 198 M94 176 L98 198\" stroke=\"#8d5524\" stroke-width=\"12\"/><!-- free arm on hip --><path d=\"M80 106 L66 126 L78 140\" stroke=\"#8d5524\" stroke-width=\"11\"/><!-- torso --><path d=\"M84 146 L84 104\" stroke=\"#facc15\" stroke-width=\"30\"/><!-- shooting arm --><path d=\"M88 100 L114 98\" stroke=\"#8d5524\" stroke-width=\"11\"/></g><!-- pistol --><rect x=\"108\" y=\"92\" width=\"18\" height=\"8\" rx=\"2\" fill=\"#1f2937\"/><rect x=\"110\" y=\"96\" width=\"6\" height=\"12\" rx=\"2\" fill=\"#1f2937\"/><ellipse cx=\"66\" cy=\"200\" rx=\"11\" ry=\"5\" fill=\"#f97316\"/><ellipse cx=\"101\" cy=\"200\" rx=\"11\" ry=\"5\" fill=\"#f97316\"/><!-- head --><circle cx=\"88\" cy=\"74\" r=\"14\" fill=\"#8d5524\"/><path d=\"M74 72 Q76 56 92 58 Q102 60 102 70 Q92 64 80 68Z\" fill=\"#111827\"/><rect x=\"70\" y=\"122\" width=\"28\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\".95\"/><path d=\"M78 131 H90\" stroke=\"#1d4ed8\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>", "run": "<svg focusable=\"false\" viewBox=\"0 0 200 236\"><ellipse cx=\"104\" cy=\"206\" rx=\"50\" ry=\"7\" fill=\"#0b1b5a\" opacity=\".28\"/><g stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"><!-- back arm --><path d=\"M104 94 L86 108 L76 124\" stroke=\"#e0ac69\" stroke-width=\"11\"/><!-- back leg pushing off --><path d=\"M96 140 L78 170 L50 176\" stroke=\"#0f172a\" stroke-width=\"15\"/><path d=\"M78 170 L50 176\" stroke=\"#e0ac69\" stroke-width=\"12\"/><!-- torso (leaning forward) --><path d=\"M98 140 L112 98\" stroke=\"#f43f5e\" stroke-width=\"30\"/><!-- front leg knee up --><path d=\"M100 140 L134 150 L130 184\" stroke=\"#0f172a\" stroke-width=\"15\"/><path d=\"M134 152 L130 184\" stroke=\"#e0ac69\" stroke-width=\"12\"/><!-- front arm --><path d=\"M114 98 L132 112 L146 96\" stroke=\"#e0ac69\" stroke-width=\"11\"/></g><ellipse cx=\"46\" cy=\"174\" rx=\"11\" ry=\"5\" transform=\"rotate(-15 46 174)\" fill=\"#22d3ee\"/><ellipse cx=\"136\" cy=\"188\" rx=\"11\" ry=\"5\" fill=\"#22d3ee\"/><!-- bib --><rect x=\"96\" y=\"108\" width=\"20\" height=\"18\" rx=\"3\" transform=\"rotate(18 106 117)\" fill=\"#fff\"/><!-- head --><circle cx=\"120\" cy=\"72\" r=\"14\" fill=\"#e0ac69\"/><path d=\"M106 70 Q106 54 124 56 Q136 58 134 70 Q126 60 112 66Z\" fill=\"#7c2d12\"/><path d=\"M104 62 L92 56\" stroke=\"#7c2d12\" stroke-width=\"7\" stroke-linecap=\"round\"/><!-- speed lines --><path d=\"M20 110 H52 M12 132 H44 M24 154 H50\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".45\"/></svg>"};
  let artN = 0;
  const art = k => { const n = ++artN; return ART[k].replace(/(id="|url\(#)(w[bf])/g, '$1$2' + n); };

  function nav(){
    const el = document.getElementById('nav'); if (!el) return;
    const here = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
    const home = here === 'index';
    el.classList.toggle('home', home);
    el.innerHTML = '<button class="menu" type="button" aria-expanded="false" aria-controls="drawer">' + ico('menu') + '<span data-i18n="menu"></span></button>'
      + '<a class="brand" href="/"><img src="/favicon.svg" alt="" width="30" height="30"><span>ottusaeredmenyek<i>.com</i></span></a>'
      + '<div class="tools"><button class="theme" type="button" aria-pressed="false"></button><div class="lang" role="group" aria-label="Language"><button data-l="en">EN</button><button data-l="hu">HU</button></div></div>';
    el.querySelector('.theme').addEventListener('click', e => switchTheme(e.currentTarget));
    el.querySelector('.lang').addEventListener('click', e => { const b = e.target.closest('button'); if (b) setLang(b.dataset.l); });
    paintThemeButton();

    // side menu
    const dr = document.createElement('div');
    dr.id = 'drawer';
    dr.innerHTML = '<div class="scrim" data-close></div><aside class="panel" role="dialog" aria-modal="true" aria-labelledby="drTitle">'
      + '<div class="dhead"><img src="/favicon.svg" alt="" width="42" height="42"><div><b id="drTitle">Modern Pentathlon</b><small data-i18n="home.by"></small></div>'
      + '<button class="x" type="button" data-close data-i18n-aria="menu.close">' + ico('close', 20) + '</button></div>'
      + '<nav class="dlinks">' + PAGES.map(([href, id, key, ic], n) => '<a href="' + href + '" style="--i:' + n + '"' + (id === here ? ' class="on" aria-current="page"' : '') + '><span class="ic">' + ico(ic) + '</span><span data-i18n="' + key + '"></span></a>').join('') + '</nav>'
      + '<div class="dfoot"><div class="dart">' + art('run') + '</div><div><b>ottusaeredmenyek.com</b><small data-i18n="home.tag"></small></div></div>'
      + '</aside>';
    document.body.appendChild(dr);
    const btn = el.querySelector('.menu'), panel = dr.querySelector('.panel');
    let lastFocus = null;
    const open = () => { lastFocus = document.activeElement; document.documentElement.classList.add('dr-open'); dr.classList.add('open'); btn.setAttribute('aria-expanded', 'true');
      setTimeout(() => (panel.querySelector('.dlinks a.on') || panel.querySelector('.dlinks a')).focus({preventScroll: true}), 60); };
    const close = () => { document.documentElement.classList.remove('dr-open'); dr.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); if (lastFocus && lastFocus.focus) lastFocus.focus({preventScroll: true}); };
    btn.addEventListener('click', open);
    dr.addEventListener('click', e => { if (e.target.closest('[data-close]')) close(); });
    dr.querySelectorAll('.dlinks a').forEach(a => a.addEventListener('click', e => {
      if (a.classList.contains('on')) { e.preventDefault(); close(); return; }
      dr.classList.add('go'); close();
    }));
    document.addEventListener('keydown', e => {
      if (!dr.classList.contains('open')) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.key === 'Tab') { const f = [...panel.querySelectorAll('a,button')]; const a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
    });
    addEventListener('pageshow', () => { dr.classList.remove('go'); close(); });
  }

  // page banner (blue box with the title), background athletes, scroll line and back-to-top button
  function decorate(){
    const here = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
    const pg = PAGES.find(x => x[1] === here);
    const ph = document.querySelector('.phead');
    if (ph){
      ph.insertAdjacentHTML('afterbegin', '<div class="g1"></div><div class="g2"></div><div class="dots"></div><div class="spot"></div>');
      if (pg && pg[4]) ph.insertAdjacentHTML('beforeend', '<div class="phart k-' + pg[4] + '" aria-hidden="true">' + art(pg[4]) + '</div>');
      if (matchMedia('(pointer:fine)').matches) ph.addEventListener('pointermove', e => { const r = ph.getBoundingClientRect(); ph.style.setProperty('--mx', (e.clientX - r.left) + 'px'); ph.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
    }
    if (here !== 'index'){
      const own = pg && pg[4];
      const pick = ['fen','obs','swim','shoot','run'].filter(k => k !== own);
      const bg = document.createElement('div'); bg.id = 'bgfx'; bg.setAttribute('aria-hidden', 'true');
      bg.innerHTML = '<div class="blob b1"></div><div class="blob b2"></div>' + [pick[0], pick[1], pick[2], pick[3]].map((k, n) => '<div class="fig f' + n + ' k-' + k + '">' + art(k) + '</div>').join('');
      document.body.prepend(bg);
    }
    const bar = document.createElement('div'); bar.id = 'progress'; bar.setAttribute('aria-hidden', 'true'); document.body.appendChild(bar);
    const up = document.createElement('button'); up.id = 'totop'; up.type = 'button'; up.innerHTML = ico('up', 20); up.setAttribute('data-i18n-aria', 'top');
    up.addEventListener('click', () => scrollTo({top: 0, behavior: calm() ? 'auto' : 'smooth'})); document.body.appendChild(up);
    let ticking = false;
    const onScroll = () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { ticking = false;
      const h = document.documentElement.scrollHeight - innerHeight; bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
      up.classList.toggle('show', scrollY > 700); document.getElementById('nav')?.classList.toggle('scrolled', scrollY > 8); }); };
    addEventListener('scroll', onScroll, {passive: true}); onScroll();
  }

  // ---------- effects ----------
  const calm = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  // first visit (coming from Google, Instagram, a typed address…): gentle fade-in of the page
  try { if (!document.referrer || new URL(document.referrer).origin !== location.origin) document.documentElement.classList.add('fx-first'); } catch(e){}

  function switchTheme(btn){
    const next = theme === 'dark' ? 'light' : 'dark', root = document.documentElement;
    if (calm()) { setTheme(next); return; }
    if (!document.startViewTransition){
      root.classList.add('fx-fade'); setTheme(next); setTimeout(() => root.classList.remove('fx-fade'), 450); return;
    }
    const r = btn.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.classList.add('fx-theme');
    const vt = document.startViewTransition(() => setTheme(next));
    vt.ready.then(() => root.animate({clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + end + 'px at ' + x + 'px ' + y + 'px)']},
      {duration: 550, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)'})).catch(() => {});
    vt.finished.finally(() => root.classList.remove('fx-theme'));
  }

  // numbers that count up when they appear: <b data-count="124">124</b>
  function countUp(el, to, ms){
    to = +to; if (!isFinite(to) || calm()) { el.textContent = to; return; }
    const t0 = performance.now(), dur = ms || 900;
    (function step(now){ const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(to * e); if (k < 1) requestAnimationFrame(step); })(t0);
  }

  // blocks further down the page float up as they scroll into view
  const REVEAL = '.card,.tbl,.ev,.go>a,.disc>div,.contact>a,.tile,.wrap>h2,.wrap>section>h3,.chart';
  function reveal(){
    if (calm() || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(list => {
      let i = 0;
      list.forEach(en => { if (!en.isIntersecting) return;
        en.target.style.setProperty('--fxd', Math.min(i++, 5) * 70 + 'ms');
        en.target.classList.add('fx-in'); io.unobserve(en.target);
        setTimeout(() => { en.target.removeAttribute('data-fx'); en.target.classList.remove('fx-in'); en.target.style.removeProperty('--fxd'); }, 1200);
      });
    }, {rootMargin: '0px 0px -8% 0px'});
    // only things that start below the screen are hidden, so nothing ever flickers at the top
    document.querySelectorAll(REVEAL).forEach(el => {
      if (el.getBoundingClientRect().top > innerHeight * 0.92) { el.setAttribute('data-fx', ''); io.observe(el); }
    });
  }

  if (!document.querySelector('link[href*="family=Inter"]')){
    const f = document.createElement('link'); f.rel = 'stylesheet'; f.href = 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..900&display=swap'; document.head.appendChild(f);
  }
  const css = document.createElement('style');
  css.textContent = ':root{--s1:#1d4ed8;--s2:#eb6834}'
    + ':root[data-theme="dark"]{--bg:#05080f;--card:#0c1220;--tint:#111a2b;--text:#e6f0ff;--muted:#93a4bd;--line:#1e2a3d;--accent:#7cc8ff;--ink:#04121f;--soft:#0e2238;--behind:#fb923c;--b:#e0632d;--s1:#4096f0;--s2:#e0632d;color-scheme:dark}'
    + ':root[data-theme="dark"] body{color:var(--text)}'
    + ':root[data-theme="dark"] .title{background:linear-gradient(100deg,#e0f2fe 0%,#7cc8ff 50%,#38bdf8 100%);-webkit-background-clip:text;background-clip:text}'
    + ':root[data-theme="dark"] .el,:root[data-theme="dark"] .err{color:#f87171}'
    + ':root[data-theme="dark"] .cmp td.win.b{color:#fdba74;background:#2a1608}:root[data-theme="dark"] .cmp th.b{color:#fdba74}'
    + ':root[data-theme="dark"] .total .k,:root[data-theme="dark"] .total .big small,:root[data-theme="dark"] .total .muted,:root[data-theme="dark"] .total small{color:rgba(4,18,31,.72)}'
    + ':root[data-theme="dark"] .total .big,:root[data-theme="dark"] .total .res .pct,:root[data-theme="dark"] .total b{color:var(--ink)}'
    + ':root[data-theme="dark"] .card,:root[data-theme="dark"] .tbl,:root[data-theme="dark"] .go a{box-shadow:none}'
    // ---------- effects (all switched off when the visitor's device asks for reduced motion) ----------
    + '@view-transition{navigation:auto}'
    + '#nav{view-transition-name:sitenav}'
    + '@keyframes fxfade{from{opacity:0}}@keyframes fxrise{from{opacity:0;transform:translateY(14px)}}@keyframes fxsink{to{opacity:0;transform:translateY(-6px)}}'
    + '@media (prefers-reduced-motion:no-preference){'
    +   '::view-transition-old(root){animation:fxsink .18s ease-in both}'
    +   '::view-transition-new(root){animation:fxrise .38s cubic-bezier(.2,.7,.2,1) .05s both}'
    +   'html.fx-first body{animation:fxfade .45s ease-out both}'
    +   '[data-fx]{transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .6s cubic-bezier(.2,.7,.2,1);transition-delay:var(--fxd,0s)}'
    +   '[data-fx]:not(.fx-in){opacity:0;transform:translateY(22px)}'
    +   '.go a,.nextbar,.contact a,.ev,.tile,.disc>div{transition:transform .25s cubic-bezier(.2,.7,.2,1),box-shadow .25s,border-color .2s,background-color .2s}'
    +   '.go a:hover,.nextbar:hover,.contact a:hover{transform:translateY(-4px);box-shadow:0 14px 34px rgba(29,78,216,.16)}'
    +   '.ev:hover,.tile:hover,.disc>div:hover{transform:translateY(-2px);border-color:var(--accent)}'
    +   ':root[data-theme="dark"] .go a:hover,:root[data-theme="dark"] .nextbar:hover,:root[data-theme="dark"] .contact a:hover{box-shadow:0 0 0 1px var(--accent),0 12px 34px rgba(124,200,255,.16)}'
    +   'button,.seg button{transition:transform .12s,background-color .2s,color .2s,border-color .2s}'
    +   'button:active:not(:disabled){transform:scale(.95)}'
    +   'tbody tr{transition:background-color .15s}'
    +   '#nav .theme svg{transition:transform .5s cubic-bezier(.2,.7,.2,1)}#nav .theme:hover svg{transform:rotate(25deg)}'
    + '}'
    + 'html.fx-theme ::view-transition-old(root),html.fx-theme ::view-transition-new(root){animation:none;mix-blend-mode:normal}'
    + 'html.fx-theme #nav{view-transition-name:none}'
    + 'html.fx-fade,html.fx-fade *{transition:background-color .4s,color .4s,border-color .4s,fill .4s !important}'
    // ---------- site shell: cozy blue-white look shared by every page ----------
    + 'html:root{--bg:#f3f7ff;--tint:#f4f8ff;--line:#e1e9f6;--soft:#e8f0ff;--muted:#56688a}'
    + 'html{background:var(--bg)}html body{background:transparent !important;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;font-feature-settings:"cv11","ss01"}'
    + '.wrap{position:relative}'
    + 'html body .card,html body .tbl{border-radius:18px;border-color:var(--line);box-shadow:0 1px 2px rgba(29,78,216,.05),0 8px 26px rgba(29,78,216,.07)}'
    + 'html body .wrap>h2,html body .wrap>section>h2{display:flex;align-items:center;gap:10px}'
    + 'html body .wrap>h2::before,html body .wrap>section>h2::before{content:"";width:6px;height:1.05em;border-radius:3px;background:linear-gradient(180deg,#60a5fa,#1d4ed8);flex:none}'
    + 'html body input:focus,html body select:focus,html body textarea:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 4px rgba(59,130,246,.18)}'
    + 'html body .seg{border-radius:14px;background:var(--card);box-shadow:0 2px 8px rgba(29,78,216,.06)}'
    + 'html body .seg button{border-radius:10px}'
    + 'html body .seg button.on{background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:#fff;box-shadow:0 4px 12px rgba(29,78,216,.28)}'
    + 'tbody tr:hover{background:var(--soft)}'
    + ':root[data-theme="dark"] .seg button.on{background:linear-gradient(135deg,#a5dbff,#5fb6f2);color:var(--ink);box-shadow:none}'
    + ':root[data-theme="dark"] .card,:root[data-theme="dark"] .tbl{box-shadow:none}'
    + ':root[data-theme="dark"] input:focus,:root[data-theme="dark"] select:focus{box-shadow:0 0 0 4px rgba(124,200,255,.18)}'
    // page banner
    + '.phead{position:relative;overflow:hidden;border-radius:26px;padding:30px 34px;margin:4px 0 22px;color:#fff;min-height:150px;display:flex;align-items:center;'
    +   'background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 45%,#14287a 100%);box-shadow:0 18px 44px rgba(20,40,122,.2)}'
    + ':root[data-theme="dark"] .phead{background:linear-gradient(135deg,#1a46b8 0%,#12318f 45%,#081544 100%);box-shadow:none;border:1px solid #1e2a3d}'
    + '.phead .g1{position:absolute;left:-15%;top:-80%;width:60%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(147,197,253,.5),rgba(96,165,250,0) 65%);pointer-events:none}'
    + '.phead .g2{position:absolute;right:-10%;bottom:-90%;width:60%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(34,211,238,.32),rgba(34,211,238,0) 62%);pointer-events:none}'
    + '.phead .dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.13) 1px,transparent 1.5px);background-size:18px 18px;pointer-events:none;-webkit-mask-image:linear-gradient(90deg,#000,transparent 75%);mask-image:linear-gradient(90deg,#000,transparent 75%)}'
    + '.phead .spot{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .4s;background:radial-gradient(380px circle at var(--mx,50%) var(--my,30%),rgba(255,255,255,.14),transparent 60%)}'
    + '.phead:hover .spot{opacity:1}'
    + '.phead .ph-in{position:relative;max-width:calc(100% - 190px)}'
    + 'html body .phead h1,html body .phead .title{color:#fff;-webkit-text-fill-color:#fff;background:none;font-size:clamp(1.7rem,4.2vw,2.5rem);font-weight:900;letter-spacing:-.025em;line-height:1.1;margin:0 0 8px}'
    + 'html body .phead .sub,html body .phead .by,html body .phead p{color:rgba(255,255,255,.88);margin:0;font-size:1rem}'
    + 'html body .phead .sub a,html body .phead p a{color:#fff}'
    + '.phead .phart{position:absolute;right:22px;bottom:-6px;width:170px;height:200px;pointer-events:none;filter:drop-shadow(0 12px 18px rgba(8,20,80,.35))}'
    + '.phead .phart svg{width:100%;height:100%}'
    + '.k-swim svg{-webkit-mask-image:radial-gradient(ellipse 52% 46% at 50% 56%,#000 55%,transparent 100%);mask-image:radial-gradient(ellipse 52% 46% at 50% 56%,#000 55%,transparent 100%)}'
    + 'html:root:not([data-theme="dark"]) body .total{background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 50%,#14287a 100%);border-radius:22px;box-shadow:0 14px 34px rgba(20,40,122,.2)}'
    + '@media (max-width:640px){.phead{padding:22px 20px;border-radius:22px;min-height:128px}.phead .ph-in{max-width:calc(100% - 92px)}.phead .phart{width:104px;height:122px;right:4px}}'
    // background athletes and soft colour blobs
    + '#bgfx{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden}'
    + '#bgfx .blob{position:absolute;border-radius:50%;filter:blur(10px)}'
    + '#bgfx .b1{width:640px;height:640px;left:-220px;top:-200px;background:radial-gradient(circle,rgba(96,165,250,.22),rgba(96,165,250,0) 65%)}'
    + '#bgfx .b2{width:720px;height:720px;right:-260px;bottom:-280px;background:radial-gradient(circle,rgba(34,211,238,.16),rgba(34,211,238,0) 65%)}'
    + '#bgfx .fig{position:absolute;width:210px;height:248px;opacity:.13}'
    + '#bgfx .fig svg{width:100%;height:100%}'
    + '#bgfx .f0{left:max(-40px,calc(50% - 760px));top:24%;transform:rotate(-6deg)}'
    + '#bgfx .f1{right:max(-40px,calc(50% - 760px));top:12%;transform:rotate(5deg)}'
    + '#bgfx .f2{left:max(-30px,calc(50% - 720px));bottom:4%;transform:rotate(4deg)}'
    + '#bgfx .f3{right:max(-30px,calc(50% - 720px));bottom:10%;transform:rotate(-4deg)}'
    + ':root[data-theme="dark"] #bgfx .fig{opacity:.09}'
    + ':root[data-theme="dark"] #bgfx .b1{background:radial-gradient(circle,rgba(64,150,240,.16),rgba(64,150,240,0) 65%)}'
    + ':root[data-theme="dark"] #bgfx .b2{background:radial-gradient(circle,rgba(34,211,238,.09),rgba(34,211,238,0) 65%)}'
    + '@media (max-width:1100px){#bgfx .fig{width:150px;height:178px;opacity:.09}#bgfx .f1,#bgfx .f2{display:none}}'
    // top bar
    + '#nav{position:sticky;top:10px;z-index:40;display:flex;align-items:center;gap:10px;margin:0 0 18px;padding:7px 8px;border-radius:18px;'
    +   'background:rgba(255,255,255,.72);-webkit-backdrop-filter:saturate(1.6) blur(14px);backdrop-filter:saturate(1.6) blur(14px);border:1px solid rgba(255,255,255,.9);box-shadow:0 4px 20px rgba(29,78,216,.08)}'
    + '#nav.scrolled{box-shadow:0 10px 30px rgba(29,78,216,.14)}'
    + ':root[data-theme="dark"] #nav{background:rgba(12,18,32,.72);border-color:#1e2a3d;box-shadow:none}'
    + ':root[data-theme="dark"] #nav.scrolled{box-shadow:0 10px 30px rgba(0,0,0,.4)}'
    + '#nav .menu{display:inline-flex;align-items:center;gap:8px;border:0;cursor:pointer;font:inherit;font-weight:700;font-size:.9rem;color:#fff;padding:8px 14px 8px 11px;border-radius:12px;'
    +   'background:linear-gradient(135deg,#3b82f6,#1d4ed8);box-shadow:0 4px 14px rgba(29,78,216,.3)}'
    + ':root[data-theme="dark"] #nav .menu{background:linear-gradient(135deg,#a5dbff,#5fb6f2);color:var(--ink);box-shadow:none}'
    + '#nav .menu:focus-visible{outline:2px solid var(--accent);outline-offset:2px}'
    + '#nav .brand{display:flex;align-items:center;gap:9px;text-decoration:none;color:var(--text);font-weight:800;font-size:.95rem;letter-spacing:-.01em;min-width:0}'
    + '#nav .brand img{border-radius:9px;flex:none;box-shadow:0 3px 10px rgba(29,78,216,.25)}'
    + '#nav .brand span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#nav .brand i{font-style:normal;color:var(--muted);font-weight:600}'
    + '#nav.home .brand{visibility:hidden}'
    + '#nav .tools{display:flex;align-items:center;gap:6px;flex:none;margin-left:auto}'
    + '#nav .theme{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:11px;border:1px solid var(--line);background:var(--card);color:var(--muted);cursor:pointer;padding:0}'
    + '#nav .theme:hover{color:var(--accent);border-color:var(--accent)}'
    + '#nav .theme:focus-visible,#nav .lang button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}'
    + '#nav .lang{display:inline-flex;border:1px solid var(--line);border-radius:11px;padding:2px;background:var(--card)}'
    + '#nav .lang button{border:0;background:none;font:inherit;font-size:.75rem;font-weight:700;color:var(--muted);padding:6px 10px;border-radius:9px;cursor:pointer}'
    + '#nav .lang button.on{background:var(--soft);color:var(--accent)}'
    + '@media (max-width:640px){#nav{top:8px;gap:8px}#nav .brand span{display:none}#nav .menu{padding:8px 12px 8px 10px}}'
    + '@media (max-width:360px){#nav .menu span{display:none}}'
    // side menu
    + 'html.dr-open{overflow:hidden}'
    + '#drawer{position:fixed;inset:0;z-index:100;visibility:hidden;transition:visibility 0s .4s}'
    + '#drawer.open{visibility:visible;transition:none}'
    + '#drawer .scrim{position:absolute;inset:0;background:rgba(8,20,60,.38);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);opacity:0;transition:opacity .35s}'
    + '#drawer.open .scrim{opacity:1}'
    + '#drawer .panel{position:absolute;left:10px;top:10px;bottom:10px;width:min(330px,calc(100% - 44px));display:flex;flex-direction:column;border-radius:24px;overflow:hidden;'
    +   'background:var(--card);color:var(--text);box-shadow:0 24px 60px rgba(8,20,80,.3);transform:translateX(calc(-100% - 20px));transition:transform .45s cubic-bezier(.2,.8,.2,1)}'
    + '#drawer.open .panel{transform:none}'
    + '#drawer.go .panel,#drawer.go .scrim{transition:none}'
    + ':root[data-theme="dark"] #drawer .panel{border:1px solid #1e2a3d;box-shadow:0 24px 60px rgba(0,0,0,.6)}'
    + '#drawer .dhead{display:flex;align-items:center;gap:12px;padding:18px 16px 14px 18px}'
    + '#drawer .dhead img{border-radius:12px;flex:none;box-shadow:0 4px 12px rgba(29,78,216,.25)}'
    + '#drawer .dhead b{display:block;font-weight:900;font-size:1.08rem;letter-spacing:-.015em;background:linear-gradient(100deg,#1d4ed8,#3b82f6);-webkit-background-clip:text;background-clip:text;color:transparent}'
    + ':root[data-theme="dark"] #drawer .dhead b{background:linear-gradient(100deg,#e0f2fe,#7cc8ff);-webkit-background-clip:text;background-clip:text}'
    + '#drawer .dhead small{display:block;color:var(--muted);font-size:.78rem}'
    + '#drawer .x{margin-left:auto;align-self:flex-start;display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:11px;border:1px solid var(--line);background:var(--tint);color:var(--muted);cursor:pointer;padding:0}'
    + '#drawer .x:hover{color:var(--accent);border-color:var(--accent)}'
    + '#drawer .dlinks{flex:1;overflow-y:auto;padding:4px 10px 10px;display:flex;flex-direction:column;gap:2px}'
    + '#drawer .dlinks a{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:14px;text-decoration:none;color:var(--text);font-weight:600;font-size:.95rem}'
    + '#drawer .dlinks .ic{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:11px;background:var(--soft);color:var(--accent);flex:none;transition:transform .25s cubic-bezier(.2,.7,.2,1),background-color .2s}'
    + '#drawer .dlinks a:hover{background:var(--tint)}'
    + '#drawer .dlinks a:hover .ic{transform:scale(1.08) rotate(-4deg)}'
    + '#drawer .dlinks a:focus-visible{outline:2px solid var(--accent);outline-offset:-2px}'
    + '#drawer .dlinks a.on{background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:#fff;box-shadow:0 8px 20px rgba(29,78,216,.28)}'
    + '#drawer .dlinks a.on .ic{background:rgba(255,255,255,.18);color:#fff}'
    + ':root[data-theme="dark"] #drawer .dlinks a.on{background:linear-gradient(135deg,#a5dbff,#5fb6f2);color:var(--ink);box-shadow:none}'
    + ':root[data-theme="dark"] #drawer .dlinks a.on .ic{background:rgba(4,18,31,.14);color:var(--ink)}'
    + '#drawer .dfoot{position:relative;overflow:hidden;margin:6px 12px 12px;border-radius:18px;padding:14px 14px 14px 96px;min-height:92px;color:#fff;display:flex;align-items:center;background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 50%,#14287a 100%)}'
    + ':root[data-theme="dark"] #drawer .dfoot{background:linear-gradient(135deg,#1a46b8,#081544)}'
    + '#drawer .dfoot b{display:block;font-size:.9rem}#drawer .dfoot small{display:block;font-size:.72rem;opacity:.85;line-height:1.35;margin-top:2px}'
    + '#drawer .dart{position:absolute;left:4px;bottom:-8px;width:86px;height:102px}#drawer .dart svg{width:100%;height:100%}'
    // scroll line + back to top
    + '.star{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;margin:-4px 2px -4px -4px;padding:0;border:0;border-radius:9px;background:none;color:#9aabc6;font-size:1.05rem;line-height:1;cursor:pointer;vertical-align:middle;transition:transform .2s,color .2s,background-color .2s}'
    + '.star:hover{color:#f59e0b;background:rgba(245,158,11,.12)}.star.on{color:#f59e0b}'
    + '.star:focus-visible{outline:2px solid var(--accent);outline-offset:1px}'
    + '@media (prefers-reduced-motion:no-preference){@keyframes pop{40%{transform:scale(1.45) rotate(-12deg)}}.star.pop{animation:pop .4s cubic-bezier(.2,.7,.2,1)}}'
    + '#progress{position:fixed;left:0;top:0;right:0;height:3px;z-index:60;transform-origin:0 50%;transform:scaleX(0);background:linear-gradient(90deg,#60a5fa,#1d4ed8,#22d3ee);pointer-events:none}'
    + '#totop{position:fixed;right:18px;bottom:18px;z-index:30;width:46px;height:46px;border-radius:15px;border:0;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:#fff;'
    +   'background:linear-gradient(135deg,#3b82f6,#1d4ed8);box-shadow:0 10px 26px rgba(29,78,216,.35);opacity:0;visibility:hidden;transform:translateY(14px);transition:opacity .3s,transform .3s,visibility .3s}'
    + '#totop.show{opacity:1;visibility:visible;transform:none}'
    + ':root[data-theme="dark"] #totop{background:linear-gradient(135deg,#a5dbff,#5fb6f2);color:var(--ink);box-shadow:none}'
    // gentle motion (off for reduced motion)
    + '@media (prefers-reduced-motion:no-preference){'
    +   '@keyframes phd1{50%{transform:translate(6%,8%) scale(1.08)}}@keyframes phd2{50%{transform:translate(-7%,-6%) scale(1.1)}}'
    +   '@keyframes bobble{50%{transform:translateY(-8px)}}@keyframes floaty{50%{translate:0 -14px}}'
    +   '@keyframes drin{from{opacity:0;transform:translateX(-14px)}}'
    +   '.phead .g1{animation:phd1 14s ease-in-out infinite}.phead .g2{animation:phd2 17s ease-in-out infinite}'
    +   '.phead .phart svg{animation:bobble 4.4s ease-in-out infinite}'
    +   '#bgfx .fig{animation:floaty 9s ease-in-out infinite}#bgfx .f1{animation-delay:-2.5s;animation-duration:11s}#bgfx .f2{animation-delay:-5s;animation-duration:10s}#bgfx .f3{animation-delay:-7s;animation-duration:12s}'
    +   '#drawer.open .dlinks a{animation:drin .45s cubic-bezier(.2,.7,.2,1) both;animation-delay:calc(var(--i) * 30ms + 80ms)}'
    +   '#drawer .dart svg{animation:bobble 4s ease-in-out infinite}'
    +   'html body .card,html body .tbl{transition:box-shadow .3s,transform .3s}'
    +   'html body .card:hover,html body .tbl:hover{box-shadow:0 1px 2px rgba(29,78,216,.06),0 14px 36px rgba(29,78,216,.12)}'
    +   '#nav .menu{transition:transform .15s,box-shadow .25s}#nav .menu:hover{box-shadow:0 8px 20px rgba(29,78,216,.38);transform:translateY(-1px)}'
    +   '#totop:hover{transform:translateY(-3px)}'
    + '}'
    + '@media (prefers-reduced-motion:reduce){#drawer .panel,#drawer .scrim{transition:none}}';
  document.head.appendChild(css);

  // followed athletes: a per-browser list of licence numbers
  const FKEY = 'mp.follow', followFns = [];
  let followed = []; try { followed = JSON.parse(localStorage.getItem(FKEY) || '[]'); if (!Array.isArray(followed)) followed = []; } catch(e){ followed = []; }
  const follow = {
    list: () => followed.slice(),
    has: id => followed.includes(id),
    toggle(id){ followed = followed.includes(id) ? followed.filter(x => x !== id) : [...followed, id];
      try { localStorage.setItem(FKEY, JSON.stringify(followed)); } catch(e){}
      followFns.forEach(fn => fn(followed.slice())); return followed.includes(id); },
    onChange: fn => followFns.push(fn),
    star(id, name){ const on = followed.includes(id);
      return '<button type="button" class="star' + (on ? ' on' : '') + '" data-follow="' + id + '" aria-pressed="' + on + '" aria-label="' + t(on ? 'fol.ariaOff' : 'fol.aria', {n: name}).replace(/"/g, '&quot;') + '" title="' + t(on ? 'fol.ariaOff' : 'fol.aria', {n: name}).replace(/"/g, '&quot;') + '">' + (on ? '★' : '☆') + '</button>'; }
  };
  addEventListener('storage', e => { if (e.key !== FKEY) return; try { followed = JSON.parse(e.newValue || '[]'); } catch(_){ followed = []; } followFns.forEach(fn => fn(followed.slice())); });
  // any ☆ button on any page toggles following without triggering the row/link it sits in
  document.addEventListener('click', e => { const b = e.target.closest('[data-follow]'); if (!b) return; e.preventDefault(); e.stopPropagation(); follow.toggle(b.dataset.follow); }, true);
  window.SITE = { t, nation, share, follow, get lang(){ return lang; }, get theme(){ return theme; }, onLang: fn => listeners.push(fn), onTheme: fn => themeListeners.push(fn), apply,
    color: name => getComputedStyle(document.documentElement).getPropertyValue(name).trim(), countUp, calm };
  document.addEventListener('DOMContentLoaded', () => { nav(); decorate(); apply(); reveal(); });
})();
