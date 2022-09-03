import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
      <StaticImage
        src="../images/programSH.jpg"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="wedding program"
        style={{ marginBottom: `var(--space-3)` }}
      />
  </Layout>
)

export default IndexPage
