import * as React from 'react';
import { Deck } from 'spectacle';
import * as createTheme from 'spectacle/lib/themes/default';
import { TitleSlide } from './TitleSlide/index';
import { css } from 'aphrodite';
import { styles } from './app.styles';

export class App extends React.Component<{}> {
    private baseTheme = createTheme.default({
       primary: 'blue',
       secondary: 'red', 
    }, {
        primary: { name: "Roboto Condensed", googleFont: true, styles: [ "400", "700i" ] },
        secondary: 'Helvetica',
    })
    public render() {
        return (
            <div className={css(styles.defaultBody)}>
                <Deck theme={ this.baseTheme } >
                    <TitleSlide />
                </Deck>
            </div>
        );
    }
}