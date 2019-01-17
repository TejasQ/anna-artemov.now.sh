import React from "react";
import Head from "next/head";

import Page from "../components/Page";
import ContentPage from "../components/ContentPage";
import Button from "../components/Button";
import P from "../components/P";
import ContactButton from "../components/ContactButton";
import { ImageColumn } from "../components/ImageColumn";

const UeberAnna = () => (
  <Page>
    <Head>
      <title>Über Anna:: Anna Martens-Artemov | Diplom Sozialpädagogin, Zertifizerte Coach</title>
    </Head>
    <ContentPage activePage="ueber-anna" columns={2} title="Über Anna">
      <div>
        <P>
          Anna Martens-Artemov, verheiratet, 3 Kinder, Dipl. Sozialpädagogin, Coach für Persönlichkeitsentwicklung und
          Teams. Zertifizierte Elternkurstrainerin für Starke Eltern - Starke Kinder sowie PEP4Kids, das Positive
          Erziehungsprogramm.
        </P>
        <P>
          Am Bibelseminar Bonn unterrichtet sie Pädagogik und Kommunikation. Referentin für Frauenfrühstückstreffen.
          Zertifizierte Beraterin für Birkman Methode und Persolog Persönlichkeitstest.
        </P>

        <ContactButton style={{ margin: "0 0 8px" }} />
        <a href="/static/cv.docx" download>
          <Button>Lebenslauf</Button>
        </a>
        <br />
        <br />
        <img style={{ width: 350, maxWidth: "100%" }} alt="Logos" src="/static/badges.png" />
      </div>
      <ImageColumn>
        <img alt="Anna Artemov" src="/static/anna2.png" />
      </ImageColumn>
    </ContentPage>
  </Page>
);

export default UeberAnna;
