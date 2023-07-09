import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Hello World!</p>
        <p>
          This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
        <h1>
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>
      </section>
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla
          facilisi morbi tempus iaculis. Ut tellus elementum sagittis vitae et
          leo duis ut diam. Nullam eget felis eget nunc. Sed viverra ipsum nunc
          aliquet bibendum enim facilisis. Volutpat maecenas volutpat blandit
          aliquam etiam erat velit scelerisque in. Et tortor at risus viverra
          adipiscing at. Mauris a diam maecenas sed enim. Odio tempor orci
          dapibus ultrices in iaculis. Elementum pulvinar etiam non quam. Arcu
          odio ut sem nulla pharetra diam sit amet nisl. Non quam lacus
          suspendisse faucibus interdum posuere lorem. Ut ornare lectus sit amet
          est placerat.
        </p>
        <p>
          Integer malesuada nunc vel risus commodo viverra maecenas accumsan
          lacus. Consequat nisl vel pretium lectus quam id. Id semper risus in
          hendrerit gravida rutrum quisque. Malesuada fames ac turpis egestas
          maecenas pharetra convallis posuere morbi. Neque vitae tempus quam
          pellentesque nec nam aliquam. Volutpat maecenas volutpat blandit
          aliquam etiam erat velit scelerisque. Dui ut ornare lectus sit amet
          est placerat in. Vitae purus faucibus ornare suspendisse sed nisi
          lacus sed. Erat imperdiet sed euismod nisi porta lorem mollis.
          Scelerisque in dictum non consectetur. Ultrices mi tempus imperdiet
          nulla malesuada pellentesque. Lectus vestibulum mattis ullamcorper
          velit sed ullamcorper morbi.
        </p>
        <p>
          Lobortis feugiat vivamus at augue eget arcu dictum varius duis.
          Pellentesque dignissim enim sit amet venenatis urna cursus eget. Non
          consectetur a erat nam at lectus urna duis. Ipsum dolor sit amet
          consectetur adipiscing elit duis. Sed ullamcorper morbi tincidunt
          ornare massa. Duis tristique sollicitudin nibh sit amet. Potenti
          nullam ac tortor vitae. Nullam non nisi est sit amet facilisis magna.
          Fringilla ut morbi tincidunt augue interdum velit euismod. Volutpat ac
          tincidunt vitae semper quis lectus nulla at volutpat. Cursus mattis
          molestie a iaculis at erat. Magna etiam tempor orci eu lobortis
          elementum nibh tellus molestie. Suscipit adipiscing bibendum est
          ultricies integer quis. Amet massa vitae tortor condimentum lacinia
          quis vel eros donec.
        </p>
        <p>
          Egestas maecenas pharetra convallis posuere. In pellentesque massa
          placerat duis ultricies lacus sed turpis. Lacus sed viverra tellus in
          hac habitasse platea dictumst. Maecenas accumsan lacus vel facilisis
          volutpat. Pellentesque habitant morbi tristique senectus et netus et
          malesuada. Diam maecenas ultricies mi eget mauris. At augue eget arcu
          dictum varius duis at. Risus nec feugiat in fermentum posuere. Quis
          ipsum suspendisse ultrices gravida dictum. Amet nisl suscipit
          adipiscing bibendum est ultricies. Aliquam faucibus purus in massa
          tempor nec feugiat nisl pretium. Leo vel fringilla est ullamcorper
          eget nulla. Pellentesque massa placerat duis ultricies lacus. Egestas
          diam in arcu cursus euismod quis viverra nibh cras. Cras adipiscing
          enim eu turpis egestas pretium aenean pharetra magna. Adipiscing enim
          eu turpis egestas pretium aenean pharetra magna ac. Lobortis elementum
          nibh tellus molestie nunc. Vel pretium lectus quam id leo in vitae
          turpis massa.
        </p>
        <p>
          Mauris nunc congue nisi vitae suscipit tellus mauris. In iaculis nunc
          sed augue. Sit amet nisl purus in mollis nunc sed. Vitae et leo duis
          ut diam quam. Sed pulvinar proin gravida hendrerit lectus. Mauris nunc
          congue nisi vitae suscipit. Pharetra sit amet aliquam id diam. Nisl
          nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Placerat
          vestibulum lectus mauris ultrices eros in cursus. Porttitor lacus
          luctus accumsan tortor posuere. Felis eget nunc lobortis mattis
          aliquam. Enim nec dui nunc mattis enim. Mus mauris vitae ultricies leo
          integer malesuada nunc vel. Aliquam vestibulum morbi blandit cursus
          risus at ultrices mi tempus. Hendrerit gravida rutrum quisque non
          tellus. Parturient montes nascetur ridiculus mus mauris vitae
          ultricies.
        </p>
      </section>
    </Layout>
  );
}
