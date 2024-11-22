export default function AboutAli() {
    return (
      <div className='container'>
        <title>About Ali Siddiqui</title>
        <link rel='icon' href='/favicon.ico' />
  
        <main>
          <div className='underline'>
            <h1 className='title'>Hello, I'm Ali Siddiqui.</h1>
          </div>
  
          <p className='description'>
            I’m currently a Computer Science student at the University of Colorado Boulder with a solid background in Python, C++, Java, 
            and JavaScript. I’m really into cybersecurity and enjoy diving deep into the challenges that come with protecting digital systems. When I’m not
            studying or working on coding projects, you can usually find me hitting the slopes—I’m a big fan of skiing and love spending time on the mountains in Colorado!
          </p>
  
          <a
            className='button'
            href='https://www.linkedin.com/in/lorenzo-jervis-bb1688327/'>
            <p>Connect with me on LinkedIn</p>
          </a>
  
          <a className='button' href='/'>
            <p>Back to Home Page</p>
          </a>
        </main>
  
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }
  
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
  
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
  
          .underline {
            margin-bottom: 1.5rem;
          }
  
          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
  
          .pic {
            height: 450px;
            width: 450px;
            border-radius: 50%;
          }
  
          .button {
            padding: 0.5rem;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            margin-top: 1rem;
          }
  
          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }
  
          .button p {
            font-size: 1rem;
            font-weight: 600;
          }
  
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>
  
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
  
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
  
