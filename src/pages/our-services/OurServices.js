import React, { Component } from 'react'
import './OurServices.css'

class OurServices extends Component {
  render() {
    return (
      <div className="our-services-container section">
        <div className="section-heading">Our Services</div>
        <div className="section-content-margin">
          <div className="services-blurb">
            Pristine Clean provides 3 home cleaning services which can be
            further tailored to your needs. These services are{' '}
            <span className="bold">regular home cleans</span> scheduled on a
            weekly to monthly basis. For a one off thorough clean we offer
            <span className="bold"> spring cleans</span> where you may choose to
            include additional extras. Finally we have{' '}
            <span className="bold"> moving in/out cleans</span>, our most
            comprehensive clean. Our services extend across all residential
            homes including detached houses, duplexes, villas, town houses,
            apartments and units. See the table below for service inclusions.
          </div>

          <div className="table-responsive">
            <table className="table table-hover default">
              <tbody>
                <tr>
                  <th className="column-service" />
                  <th className="column-regular">Regular</th>
                  <th className="column-spring">Deep cleaning</th>
                  <th className="column-move-in-out">Move in/out</th>
                </tr>

                <tr className="active">
                  <td>
                    <span className="bold">Starting Price</span>
                  </td>
                  <td>$55</td>
                  <td>$100</td>
                  <td>$300</td>
                </tr>

                <tr className="active">
                  <td>
                    <span className="bold">Common areas</span>
                  </td>
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Vacuum carpet</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Sweep and hot mop floors</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Clean mirrors</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Empty trash</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Dust all surfaces</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Sweep and mop floors</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Remove cobwebs</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Mould removal</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Dust and wipe furniture</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td> -</td>
                </tr>
                <tr>
                  <td>Vacuum couch & chairs</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td> -</td>
                </tr>
                <tr>
                  <td>Carpet steam cleaning</td>
                  <td> -</td>
                  <td>Optional</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Windows including frame & track</td>
                  <td> -</td>
                  <td>Optional</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Removal of mark & stains from walls/doors</td>
                  <td> -</td>
                  <td>Optional</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Light covers (interior & exterior)</td>
                  <td> -</td>
                  <td>Optional</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Wardrobe/cabinets (interior & exterior)</td>
                  <td> -</td>
                  <td> -</td>
                  <td>Yes</td>
                </tr>

                <tr className="active">
                  <td>
                    <span className="bold">Kitchen</span>
                  </td>
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Clean sinks and backsplash</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Wipe appliance exteriors</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Wipe microwave exterior</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Wipe rangehood exterior</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Wipe cupboards and bench</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Polish stainless steel</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Oven cleaning</td>
                  <td> -</td>
                  <td>Optional</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Rangehood filter</td>
                  <td> -</td>
                  <td>Optional</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Cupboard/Cabinet interiors</td>
                  <td> -</td>
                  <td> -</td>
                  <td>Yes</td>
                </tr>

                <tr className="active">
                  <td>
                    <span className="bold">Bathroom</span>
                  </td>
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Clean and disinfect toilet</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Clean sink, shower & tub</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Mirrors and chrome fixtures cleaned/shined</td>
                  <td>Yes</td>
                  <td>Yes</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default OurServices
