import { Component, Prop, h, getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  constructor() {
    this.internalOptions = JSON.parse(this.options);
    console.log(this.internalOptions);
  }
  /**
   * The brand name
   */
  @Prop() brandName: string;

  /**
   * The Logo name
   */
  @Prop() logo: string;

  @Prop() options: string;

  @State() internalOptions: string[];

  componentWillLoad() {
    this.parseOptions();
  }
  // @Watch('options')
  parseOptions() {
    if (this.options) {
      this.internalOptions = JSON.parse(this.options);
    }
  }

  render() {
    this.parseOptions();
    const imageSrc = getAssetPath(`../assets/${this.logo}`);
    return (
      <div>
        <header class="header-wrapper">
          <div class="logo">
            <a href="#" class="app-logo">
              <img src={imageSrc} alt="logo" />
            </a>
            <h3>{this.brandName}</h3>
          </div>

          <div>
            <ul class="links">
              {this.internalOptions.map(item => {
                return <li class="link">{item}</li>;
              })}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
