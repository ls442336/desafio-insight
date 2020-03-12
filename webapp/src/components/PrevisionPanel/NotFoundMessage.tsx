import React, { FunctionComponent } from 'react';
import Bus404Image from '../../assets/undraw_not_found_60pq.png'

type Props = {
    show: boolean
};

class NotFoundMessage extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        if (!this.props.show) {
            return (null);
        }

        return (
            <div
                style={{
                    display: 'flex',
                    height: '100%',
                    flexDirection: 'column',
                    marginTop: '30px'
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <img style={{ margin: "auto" }} width="200px" src={Bus404Image} />
                    <span
                        style={{
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                    >Nenhum ônibus encontrado</span>
                    <span
                        style={{
                            textAlign: "center"
                        }}
                    >Não há ônibus nesta rota atualmente</span>
                </div>
            </div>
        );
    }
}

export default NotFoundMessage; 