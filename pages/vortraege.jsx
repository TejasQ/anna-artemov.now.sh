import React from "react";
import Head from "next/head";

import Page from "../components/Page";
import ContentPage from "../components/ContentPage";
import Button from "../components/Button";
import P from "../components/P";
import TalkTheme from "../components/TalkTheme";
import ContactButton from "../components/ContactButton";

const Coaching = () => (
  <Page>
    <Head>
      <title>Vorträge :: Anna Martens-Artemov | Diplom Sozialpädagogin, Zertifizerte Coach</title>
    </Head>
    <ContentPage activePage="vortraege" title="Vorträge">
      <div style={{ width: "100%" }}>
        <P>
          Ein kleiner Einblick in beliebte Themen aus Annas Repertoire. Bei Interesse, nehmen Sie gerne Kontakt auf. Auf
          Wunsch können auch neue individuelle Vorträge speziell für Sie ausgearbeitet werden.
        </P>

        <ContactButton />

        <br />
        <br />

        <TalkTheme
          title="Nimm’s nicht persönlich - Umgang mit Kränkungen"
          picture="https://images.unsplash.com/photo-1542145748-0b532b024898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        >
          <P>
            Kränkungen sind der Grund für fast alle zwischenmenschlichen Probleme. Sie gehören zu den schmerzlichsten
            Erfahrungen im Alltag und die Auseinandersetzung mit ihnen bleibt niemanden erspart. Wie schaffen wir es
            jedoch einen gelassenen Umgang mit Kränkungen zu finden, so dass sie unseren Selbstwert nicht
            beeinträchtigen.
          </P>
        </TalkTheme>
        <TalkTheme
          title="Das verwundete Herz"
          picture="https://images.unsplash.com/photo-1516967124798-10656f7dca28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        >
          <P>
            Wir alle machen Erfahrungen, bei der wir uns zurückgewiesen und verletzt gefühlt haben. Einige von diesen
            Verletzungen brennen sich tiefer in unsere Seele ein. So tief, dass sie Jahre später noch weh tut und
            blutet.
          </P>
          <P>
            Diese Wunden bestimmen wie wir uns selbst und andere sehen und haben Auswirkungen auf unsere Beziehungen.
            Wenn wir Christus Zugang zu unseren Wunden geben, kann sie heilen und zum Segen für andere werden.
          </P>
        </TalkTheme>
        <TalkTheme
          title="Familienbande oder Fessel? – Geschwisterbeziehungen"
          picture="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        >
          <P>
            Die Beziehungen zu den Geschwistern sind in vielen Fällen die längsten unseres Lebens. Sie sind es auch, die
            unser Leben am meisten prägen. Welche Rolle wir in der Geschwisterkonstellation einnehmen, wirkt sich auf
            unser Verhalten in anderen Beziehungen aus. Wenn wir uns das bewusst machen, können wir daraus profitieren.
            Anhand der Beziehungen zwischen Josef und seinen Brüdern werden die Rollen und ihren Auswirkungen deutlich.
          </P>
        </TalkTheme>
        <TalkTheme
          title="Selbstbewusst und Selbstwirksam"
          picture="https://images.unsplash.com/photo-1536197531100-50b27f49a08c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        >
          <P>
            Wer kennt sie nicht? Selbstzweifel, die uns verunsichern: Kann ich das, darf ich das, war ich gut genug?
            Diese Selbstzweifel untergraben unser Selbstwertgefühl. Für ein starkes Selbstwertgefühl, ist es wichtig
            herauszufinden, woran ich meinen Wert festmache. Die Säulen der Identität, die wir in Gott haben, geben uns
            einen neuen Selbstwert und eine Perspektive auf ein erfülltes Leben.
          </P>
        </TalkTheme>
        <TalkTheme
          title="Wenn aus Prinzen Frösche werden – Ehe ein Ort der Selbstkenntnis und Heilung der Gefühle"
          picture="https://images.unsplash.com/photo-1457504865919-3249f1605501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        >
          <P>
            Jede Ehe erlebt nach der Hochzeit eine Ernüchterung der Gefühle. Der Prinz hat sich in einen Frosch
            verwandelt. Wenn wir uns in der Krise, von unserem Partner zu uns wenden und uns fragen: Was hat das mit mir
            zu tun? Welche Geschichte will es mir erzählen? Dann können diese Krisen einen Beitrag dazu leisten, der zur
            Selbstkenntnis und zur Heilung unserer Persönlichkeit führt.
          </P>
        </TalkTheme>
      </div>
    </ContentPage>
  </Page>
);

export default Coaching;
