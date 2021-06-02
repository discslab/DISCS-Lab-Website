<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                        <li>
                            <a className={item.cName} href={item.url}>
                            <i className={item.icon}></i>{item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>

                MenuItems.map(function(el) { return el.title; })

['home', 'research', 'team']

                <Button>PhD/MSc/UG Openings</Button>

      <Navbar />
      <Home />
      <Research />
      <Team />
      <News />
      <Publications />


      <span className="img-box"></span>
        <header className="home-title-wrapper">
          Data Intensive Storage & Computer Systems Lab
        </header>
        <span className="home-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eget libero tempor, semper erat quis, ultricies lacus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Pellentesque ac
          scelerisque metus. <br />
          <br />
          Curabitur dapibus leo eget velit aliquet, a ultricies purus venenatis.
          Donec augue ligula, tristique ac eros non, lacinia dapibus turpis. Sed
          ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto. <br />
        </span>


        KEYWORDS IN RESEARCH
        <div className="list-keywords">
                    {item.keywords.map((word, index) => {
                      return <span className="keyword">{word}</span>;
                    })}
                  </div>
