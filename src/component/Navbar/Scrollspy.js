import React, { Component } from 'react';

class scrollSpy extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.scrollTargetIds = this.props.scrollTargetIds;
        this.activeNavClass = this.props.activeNavClass;
        this.scrollDuration = Number(this.props.scrollDuration) || 1000;
        this.headerBackground = this.props.headerBackground === "true" ? true : false;

        if (this.props.router && this.props.router === "HashRouter") {
            this.homeDefaultLink = "#/";
            this.hashIdentifier = "#/#";
        } else {
            this.homeDefaultLink = "/";
            this.hashIdentifier = "#";
        }
        this.scrollSection.bind(this);
    }

    easeInOutQuad(current_time, start, change, duration) {
        current_time /= duration / 2;
        if (current_time < 1) return change / 2 * current_time * current_time + start;
        current_time--;
        return -change / 2 * (current_time * (current_time - 2) - 1) + start;
    };

    scrollTo(start, to, duration) {
        let change = to - start,
            currentTime = 0,
            increment = 10;

        let animateScroll = () => {
            currentTime += increment;
            let val = this.easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };

        animateScroll();
    }

    getNavLinkElement(sectionID) {
        return document.querySelector(`a[href='${this.hashIdentifier}${sectionID}']`);
    }

    getNavToSectionID(navHref) {
        return navHref.includes(this.hashIdentifier) ? navHref.replace(this.hashIdentifier, "") : "";
    }

    componentDidMount() {
        // Add a delay to ensure DOM elements are loaded
        setTimeout(() => {
            if (document.querySelector(`a[href='${this.homeDefaultLink}']`)) {
                document.querySelector(`a[href='${this.homeDefaultLink}']`).addEventListener("click", (event) => {
                    event.preventDefault();
                    this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
                    window.location.hash = "";
                });
            }

            const navList = document.querySelector("div[data-nav='list']");
            if (navList) {
                navList.querySelectorAll("a").forEach((navLink) => {
                    navLink.addEventListener("click", (event) => {
                        event.preventDefault();
                        let sectionID = this.getNavToSectionID(navLink.getAttribute("href"));

                        if (sectionID) {
                            const targetElement = document.getElementById(sectionID);
                            if (targetElement) {
                                let scrollTargetPosition = targetElement.offsetTop - (this.headerBackground ? navList.scrollHeight : 0);
                                this.scrollTo(window.pageYOffset, scrollTargetPosition, this.scrollDuration);
                            }
                        } else {
                            this.scrollTo(window.pageYOffset, 0, this.scrollDuration);
                        }
                    });
                });
            }

            window.addEventListener("scroll", this.scrollSection, true);
        }, 100);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollSection, true);
    }

    scrollSection = () => {
        // Handle navbar sticky behavior
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.pageYOffset > 50) {
                navbar.classList.add('nav-sticky');
            } else {
                navbar.classList.remove('nav-sticky');
            }
        }

        let scrollSectionOffsetTop;
        this.scrollTargetIds.forEach((sectionID, index) => {
            const targetElement = document.getElementById(sectionID);
            const navList = document.querySelector("div[data-nav='list']");

            // Check if target element exists before accessing its properties
            if (!targetElement) {
                return; // Skip this iteration if element doesn't exist
            }

            scrollSectionOffsetTop = targetElement.offsetTop - (this.headerBackground && navList ? navList.scrollHeight : 0);

            if (window.pageYOffset >= scrollSectionOffsetTop && window.pageYOffset < scrollSectionOffsetTop + targetElement.scrollHeight) {
                const navElement = this.getNavLinkElement(sectionID);
                if (navElement) {
                    navElement.classList.add(this.activeNavClass);
                    if (navElement.parentNode) {
                        navElement.parentNode.classList.add(this.activeNavClass);
                    }
                    this.clearOtherNavLinkActiveStyle(sectionID);
                }
            } else {
                const navElement = this.getNavLinkElement(sectionID);
                if (navElement) {
                    navElement.classList.remove(this.activeNavClass);
                    if (navElement.parentNode) {
                        navElement.parentNode.classList.remove(this.activeNavClass);
                    }
                }
            }

            if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight && index === this.scrollTargetIds.length - 1) {
                const navElement = this.getNavLinkElement(sectionID);
                if (navElement) {
                    navElement.classList.add(this.activeNavClass);
                    if (navElement.parentNode) {
                        navElement.parentNode.classList.add(this.activeNavClass);
                    }
                    this.clearOtherNavLinkActiveStyle(sectionID);
                }
            }
        });
    }

    clearOtherNavLinkActiveStyle(excludeSectionID) {
        this.scrollTargetIds.forEach((sectionID, index) => {
            if (sectionID !== excludeSectionID) {
                const navElement = this.getNavLinkElement(sectionID);
                if (navElement) {
                    navElement.classList.remove(this.activeNavClass);
                    if (navElement.parentNode) {
                        navElement.parentNode.classList.remove(this.activeNavClass);
                    }
                }
            }
        });
    }

    render() {
        return (
            <div data-nav="list" className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default scrollSpy;