import * as React from 'react';
import { css } from 'aphrodite';
import { styles } from './InstantFilm.styles';

export interface IProps {
    imageSource: string;
    children: React.ReactNode;
    hideTextFrame?: boolean;
}

export class InstantFilm extends React.Component<IProps> {
    public render() {
        return (
            <div className={css(styles.frame)}>
                <div className={css(styles.image)}>
                    <img src={this.props.imageSource} width={300} />
                </div>
                {!this.props.hideTextFrame &&
                    <div>
                        <div className={css(styles.textFrame)}>
                            {this.props.children}
                        </div>
                    </div>
                }
            </div>
        );
    }
}