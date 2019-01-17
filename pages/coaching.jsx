import React from "react";
import Head from "next/head";

import Page from "../components/Page";
import ContentPage from "../components/ContentPage";
import Button from "../components/Button";
import P from "../components/P";
import { ImageColumn } from "../components/ImageColumn";

const Coaching = () => (
  <Page>
    <Head>
      <title>Coaching :: Anna Martens-Artemov | Diplom Sozialpädagogin, Zertifizerte Coach</title>
    </Head>
    <ContentPage columns={2} activePage="coaching" title="Coaching">
      <div>
        <P>
          Wichtige Entscheidungen treffen, selbstbestimmt leben oder einfach mal reden. Anna ist zertifizierte Coach und
          bietet Beratung auf foldenden Gebieten an:
        </P>
        <P>
          <ul>
            <li>Karrierecoaching </li>
            <li>Life Coaching </li>
            <li>Elterncoaching </li>
            <li>Birkman Lebensstilprofil</li>
          </ul>
        </P>

        <Button color="primary" style={{ marginBottom: 8 }}>
          Kontakt
        </Button>
      </div>
      <ImageColumn>
        <img
          alt="Anna Artemov"
          src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
      </ImageColumn>
    </ContentPage>
  </Page>
);

export default Coaching;
