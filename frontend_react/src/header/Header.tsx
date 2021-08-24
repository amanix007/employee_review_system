import * as React from 'react';

export interface IHeaderProps {
}

export interface IHeaderState {
}

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md ">
          <a className="navbar-brand" href="/"><img src="https://utility-assets.s3.amazonaws.com/media/assets/full-logo.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item dropdown">
            <a href="#">Sign In</a>
            
              </li>
              {/*                <a class="btn btn-primary" href="/site/register">Register as an Agent</a>*/}
            </ul>
          </div>
        </nav>

      </div>
    );
  }
}
