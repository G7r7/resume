import React from "react";
import { Technology as Tech } from '../../types/data'
import './style.scss';

interface Props {
    technology: Tech
}

export class Technology extends React.Component<Props> {
    render(): React.ReactNode {
        return  <div className="technology" >
            <this.props.technology.logo className="tech-logo" /> {this.props.technology.name}
        </div> 
    }
}