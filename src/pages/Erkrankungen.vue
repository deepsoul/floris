<template>
  <v-container class="my-2 my-md-12">
    <h2 class="font-weight-bold mt-0 mb-md-8 text-center">Erkrankungen</h2>
    <v-card class="pa-6" elevation="2">
      <v-expansion-panels multiple>
        <v-expansion-panel v-for="(item, i) in erkrankungen" :key="i">
          <v-expansion-panel-title>
            <v-icon start color="primary" class="mr-2"
              >mdi-alert-circle-outline</v-icon
            >
            <span class="text-h6" :class="{small: smAndDown}">{{
              item.title
            }}</span>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div v-html="item.text" />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
import {useDisplay} from 'vuetify/lib/composables/display';
const {smAndDown} = useDisplay();
const erkrankungen = [
  {
    title: 'Analabszeß und Analfistel',
    text: `<p>Ein Abszeß ist eine eingekapselte, eitrige Entzündung. Meist beginnt sie in den Afterdrüsen des Analkanals und führt zu einer schmerzhaften Schwellung am Afterrand. Ein Abszeß muß umgehend operativ eröffnet werden, damit der Eiter abfließen kann. Zugsalben sowie Antibiotika als alleinige Therapie sind nicht ausreichend.</p><p>Einem Analabszeß liegt häufig eine Analfistel zugrunde. Es handelt sich hierbei um einen feinen Verbindungsgang zwischen dem Analkanal und der äußeren Haut. Je nach Verlauf der Fistel werden von ihr mehr oder weniger Schließmuskelanteile durchlaufen. Wird eine Analfistel nicht gefunden bzw. nicht fachgerecht beseitigt, kann ein Abszeß jederzeit wieder auftreten und damit zu weiteren Schließmuskelschäden führen.</p>`,
  },
  {
    title: 'Analekzem',
    text: `<p>Das Analekzem ist eine juckende entzündliche Hautveränderung des Afters und seiner umgebenden Haut. Es ist eines der häufigsten Erkrankungen in der Proktologie. Das Ekzem ist meist keine selbständige Erkrankung, sondern oft Folge einer Enddarmerkrankung wie Hämorrhoidalleiden, Fisteln, Feigwarzen oder einer Fissur. Durch die proktologische Untersuchung bei einem Spezialisten müssen Hauterkrankungen im Afterbereich ausgeschlossen werden, die zunächst wie ein Ekzem aussehen. Hierzu gehören z.B. die Neurodermitis, die Schuppenflechte (Psoriasis), ein Pilzbefall der Haut oder bestimmte Viruserkrankungen (Feigwarzen, Herpes etc.).</p><p>Die Therapie richtet sich immer nach der Ursache der Erkrankung. Nur durch die Beseitigung der Ursache ist eine dauerhafte Beschwerdefreiheit zu erreichen. In jedem Fall empfiehlt sich eine schonende und nicht zu übertriebene Analhygiene. Der After sollte nach dem Stuhlgang mit klarem Wasser gereinigt werden. Wenn hierzu keine Möglichkeit besteht sollte nur weiches Toilettenpapier verwendet werden, das evtl. mit Wasser etwas angefeuchtet werden kann. Auf Seife und andere Reinigungsmittel sollte generell am After verzichtet werden. Herkömmliche Feuchttücher, egal welcher Art, sollten unbedingt vermieden werden, da sie Stoffe enthalten können, die Allergien auslösen und dadurch das Ekzem unterhalten. Auch die handelsüblichen Hämorrhoidalsalben sollten vermieden werden, sie enthalten meist lokale Betäubungsmittel, die wiederum Unverträglichkeiten auslösen können.</p>`,
  },
  {
    title: 'Analfissur (After-Riß)',
    text: `<p>Es handelt sich um einen länglichen geschwürartigen Einriß der hochempfindlichen Afterhaut (Anoderm). Er verursacht stark brennende Schmerzen bei und nach der Stuhlentleerung, die über Stunden anhalten können. Oft findet sich hellrotes Blut am Toilettenpapier oder am Stuhlgang. Durch die Schmerzen kommt es zu einer Verkrampfung der Schließmuskulatur, dadurch zu einer Drosselung der Durchblutung und somit zu einer verschlechterten Abheilung. Ist der Afterriß frisch (akute Analfissur), kann durch eine Drucksenkung im Schließmuskelapparat z.B. durch Salben die Durchblutung verbessert und somit ein abheilen erreicht werden.</p><p>Heilt der Riß nicht aus und kommt es zur Ausbildung einer chronischen Fissur mit vernarbtem Randwall und Wundgrund sowie typischen Hautveränderungen (Vorpostenfalte, hypertrophe Analpapille), besteht die Gefahr einer Fistelbildung mit Schädigung des Schließmuskels. Eine chronische Analfissur muß deshalb operiert werden. In Vollnarkose wird das entzündlich-narbig veränderte Gewebe ausgeschnitten. Die resultierende frische Wunde heilt in der Regel gut ab, wobei die Wundheilung manchmal recht lange andauern kann. Unterstützend können als natürliche Quellmittel Flohsamenschalen eingenommen werden.</p>`,
  },
  {
    title: 'Analvenenthrombose',
    text: `<p>Analvenenthrombosen sind innerhalb von Minuten bis Stunden auftretende schmerzhafte Knoten am Afterrand. Sie entstehen durch ein Blutgerinsel in einer Vene am After. Sie können unterschiedlich groß sein, sind meist bläulich-rot schimmernd und derb. Als Ursache gelten körperliche Anstrengung wie schweres Heben oder Pressen, Sport, Drucksteigerungen im Bauch durch Husten oder Niesen, starkes Pressen auf der Toilette bei Verstopfung, aber auch häufige Stuhlentleerung wie bei Durchfall. Das Vorhandensein vergrößerter Hämorrhoiden kann ebenfalls eine Ursache darstellen.</p><p>Nur bei kleinen oder älteren Thrombosen mit geringen Beschwerden ist keine Behandlung notwendig, ggf. können Salben und Zäpfchen helfen. Bei stark schmerzhaften Thrombosen kann durch einen kleinen Eingriff in örtlicher Betäubung der Knoten entfernt und damit für eine schnelle Linderung gesorgt werden.</p>`,
  },
  {
    title: 'Darmkrebs',
    text: `<p>Darmkrebs ist eine der häufigsten Krebserkrankungen in den westlichen Ländern. Jährlich erkranken in Deutschland rund 70.000 Menschen an Darmkrebs und ca. 30.000 Menschen sterben daran. Darmkrebs entsteht aus Dickdarmpolypen, die zunächst völlig gutartig sind. Nach vier bis zehn Jahren entarten einige Polypen und werden bösartig. Erst wenn ein Tumor gewachsen ist oder auch andere Organe befallen wurden, treten Beschwerden auf. Erste Anzeichen können leicht mit anderen, harmlosen Beschwerden verwechselt werden. Da die Heilungschancen entscheidend davon abhängen, dass ein bösartiger Tumor so früh wie möglich entdeckt wird, sind Vorsorgeuntersuchungen bei Darmkrebs ganz besonders wichtig. Beschwerden im Magen-Darm-Bereich, wie etwa häufige Verstopfung, Krämpfe oder wiederkehrender Durchfall, sollten immer durch einen Arzt abgeklärt werden.</p><p>Darmtumoren wachsen langsam. Sie können, bis sie entdeckt werden, eine erhebliche Größe erreichen. Die Heilungschancen sind umso besser, je früher der Tumor erkannt wird. Deshalb ist die Vorsorgeuntersuchung so wichtig.</p>`,
  },
  {
    title: 'Darmpolypen',
    text: `<p>Darmpolypen sind gutartige Schleimhautwucherungen im Dickdarm. Sie können einzeln oder mehrfach auftreten. Polypen verursachen meist keine Beschwerden, können aber gelegentlich Blutungen oder Stuhlunregelmäßigkeiten hervorrufen. Da aus Polypen Darmkrebs entstehen kann, sollten sie bei der Darmspiegelung entfernt werden.</p>`,
  },
  {
    title: 'Divertikel',
    text: `<p>Divertikel sind Ausstülpungen der Darmwand, die vor allem im Dickdarm auftreten. Sie sind meist harmlos, können sich aber entzünden (Divertikulitis) und zu Beschwerden wie Schmerzen, Fieber und Stuhlveränderungen führen. In schweren Fällen kann eine Operation notwendig sein.</p>`,
  },
  {
    title: 'Feigwarzen (Condylome)',
    text: `<p>Feigwarzen sind Folge einer Virusinfektion. Typische Symptome sind Juckreiz und Blutspuren am Toilettenpapier sowie ein allgemeines Fremdkörpergefühl. Feigwarzen können durch Geschlechtsverkehr übertragen werden, aber auch andere Infektionswege wie gemeinsames Baden, gemeinschaftliche Nutzung von Handtüchern oder Saunabesuch sind möglich. Dringend erforderlich ist während der Behandlung eine Mituntersuchung des Partners sowie geschützter Geschlechtsverkehr (Kondom verwenden).</p><p>In den meisten Fällen werden die Feigwarzen operativ (in Vollnarkose) entfernt. Vereinzelte Condylome können in Lokalanästhesie abgetragen werden. Bei geringer Ausprägung können auch Salben eingesetzt werden. Häufig kommt es trotz vollständiger Entfernung zur erneuten Ausbildung der Warzen. Nur durch regelmäßige Untersuchungen lassen sich Neubildungen rechtzeitig erkennen und behandeln.</p>`,
  },
  {
    title: 'Hämorrhoiden',
    text: `<p>Hämorrhoiden sind Gefäßpolster, die am Übergang zwischen Mastdarm und After unter der Schleimhaut gelegen sind. Alle Menschen haben Hämorrhoiden, es handelt sich zunächst um eine normale anatomische Struktur. Ihre Funktion ist die Feinabdichtung des Afters. Diese Abdichtung wird durch eine Anschwellung der Gefäßpolster erreicht. Kurz vor der Stuhlentleerung kommt es dann zum Abschwellen der Gefäßpolster, sodaß der Mastdarm entleert werden kann.</p><p>Hämorrhoiden können sich vergrößern und dadurch zu verschiedenen Beschwerden führen. Die häufigsten Beschwerden sind Blutungen, Juckreiz, Nässen, Brennen und ständiges Wundgefühl. Häufig liegt auch ein Gefühl der unvollständigen Entleerung sowie eine Störung der Feinkontinenz vor (Stuhlschmieren, verschmutzte Unterwäsche).</p><p>Erst bei diesen typischen Befunden spricht man von einem Hämorrhoidalleiden, das in jedem Fall behandlungsbedürftig ist. Dabei können die weit verbreiteten Salben oder Zäpfchen nur zu einer Linderung der Beschwerden führen, die Ursache der Beschwerden kann jedoch mit diesen Präparaten nicht beseitigt werden. Abhängig vom Stadium des Hämorrhoidalleidens werden die Hämorrhoiden verödet (Sklerosierung) oder mit Gummiringen abgebunden (Gummiringligatur). Erst wenn diese Therapie keinen Erfolg bringt und in weit vortgeschrittenen Stadien kann eine Operation notwendig sein.</p><p>Bei der Gummiringligatur wird das Hämorrhoidalgewebe mit Hilfe eines Gummiringes abgebunden. Die Behandlung verursacht keine Schmerzen, eine Betäubung ist nicht nötig. Zuerst wird ein Enddarmspiegelgerät (Proktoskop) wenige Zentimeter in den After eingeführt. Dann wird mit einem speziellen Instrument ein kleiner Gummiring über den Knoten geschoben. Er unterbindet die Blutzufuhr und verkleinert die Hämorrhoide auf ein normales Maß. Der gesamte Vorgang dauert nur wenige Minuten. Das abgeschnürte Gewebe stirbt ab und fällt nach einigen Tagen mit dem Gummiring ab. Beides wird mit dem Stuhlgang ausgeschieden. Aus der resultierenden Schleimhautwunde kann eine Abstoßungsblutung entstehen, die jedoch in den meisten Fällen gering ist und von selbst zum Stehen kommt. Die Abheilung der Schleimhautwunde benötigt etwa 14 Tage. Je nach Ausprägung des Hämorrhoidalleidens können mehrere Sitzungen in Abständen von jeweils 4 Wochen notwendig sein.</p>`,
  },
  {
    title: 'Marisken',
    text: `<p>Es handelt sich hierbei um harmlose Hautfalten am Afterrand. Sie werden im Volksmund auch fälschlicherweise als "äußere Hämorrhoiden" bezeichnet. Sie stellen allenfalls ein kosmetisches oder hygienisches Problem dar und verursachen nur selten Beschwerden. Häufig angeschwollene Marisken sind ein Hinweis auf ein Haemorrhoidalleiden, das behandlungsbedürftig ist.</p><p>Sollten die Marisken aus "hygienischen Gründen" beim Reinigen stören, besteht die Möglichkeit diese mit einer lokalen Betäubung zu entfernen. Bei ausgeprägten Marisken kann es auch notwendig sein, die Abtragung in einer kurzen Vollnarkose durchzuführen.</p>`,
  },
  {
    title: 'Steißbeinfistel (Sinus pilonidalis)',
    text: `<p>Bei einer Steißbeinfistel bestehen teils fuchsbauartige Gänge (Fisteln) über dem Steiß- und Kreuzbein unter der Haut. Häufig lassen sich die Gänge als kleine Öffnungen über dem Steißbein entlang der Poritze erkennen. Steißbeinfisteln finden sich bevorzugt bei stark behaarten Jugendlichen und Personen, die viel sitzen (z.B. Autofahrer, Reiter). Sie werden wahrscheinlich dadurch verursacht, dass Haare durch die Haut nach innen wachsen. Infiziert sich der Hohlraum, kann dies zu wiederkehrenden schmerzhaften Abszessen und einem verzweigten Gangsystem führen.</p><p>Steißbeinfisteln heilen in aller Regel nicht von selbst. Manche öffnen sich nach außen; die Beschwerden bessern sich dadurch aber meist nur vorübergehend, stets bleibt eine Fistel. Diese führt zu immer wieder auftretenden Entzündungen. Eine Heilung ist nur durch eine vollständige operative Entfernung des gesamten Fistelgangsystems möglich.</p><p>Um ein Wiederauftreten (Rezidiv) zu vermeiden, wird meistens eine offene Wundbehandlung durchgeführt. Hierunter ist die Gefahr eines Rezidives am geringsten. Die Operation einer Steißbeinfistel gehört zu den ärztlichen Routineeingriffen. Komplikationen sind selten. Sehr selten sind stärkere Nachblutungen in den ersten Tagen, die ärztlich behandelt werden müssen. Die Heilungsaussichten nach der Operation sind im Allgemeinen gut, meist tritt schnell Beschwerdefreiheit ein. Die Abheilung der Wundhöhle kann jedoch mehrere Wochen dauern.</p>`,
  },
];
</script>
