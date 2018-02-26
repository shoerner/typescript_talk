import * as React from 'react';
import { Deck } from 'spectacle';
import * as createTheme from 'spectacle/lib/themes/default';
import { TitleSlide } from './TitleSlide';
import { css } from 'aphrodite';
import { styles } from './app.styles';
import { EmcaScript } from './EmcaScript';
import { WhySlide } from './WhySlide';
import { WhatSlide } from './WhatSlide';
import { JavaScriptTypes } from './JavaScriptTypes/index';

export class App extends React.Component<{}> {
    private baseTheme = createTheme.default({
        primary: 'blue',
        secondary: 'white',
    }, {
            primary: { name: "Roboto Condensed", googleFont: true, styles: ["400", "700i"] },
            secondary: 'Helvetica',
        })
    public render() {
        return (
            <div className={css(styles.defaultBody)}>
                <Deck theme={this.baseTheme} >
                    <TitleSlide />
                    {JavaScriptTypes({})}
                    {WhatSlide({})}
                    {WhySlide({})}
                    <EmcaScript />
                </Deck>
            </div>
        );
    }
}