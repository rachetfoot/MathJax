module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      unpacked: [
        "unpacked"
      ],
      packed: [
        "config",
        "docs",
        "extensions",
        "jax",
        "localization"
      ],
      allConfigs: [
        "config",
        "unpacked/config"
      ],
      fontAsana: [
        "fonts/HTML-CSS/Asana-Math",
        "jax/output/HTML-CSS/fonts/Asana-Math",
        "unpacked/jax/output/HTML-CSS/fonts/Asana-Math",
        "jax/output/SVG/fonts/Asana-Math",
        "unpacked/jax/output/SVG/fonts/Asana-Math"
      ],
      fontGyrePagella: [
        "fonts/HTML-CSS/Gyre-Pagella",
        "jax/output/HTML-CSS/fonts/Gyre-Pagella",
        "unpacked/jax/output/HTML-CSS/fonts/Gyre-Pagella",
        "jax/output/SVG/fonts/Gyre-Pagella",
        "unpacked/jax/output/SVG/fonts/Gyre-Pagella"
      ],
      fontGyreTermes: [
        "fonts/HTML-CSS/Gyre-Termes",
        "jax/output/HTML-CSS/fonts/Gyre-Termes",
        "unpacked/jax/output/HTML-CSS/fonts/Gyre-Termes",
        "jax/output/SVG/fonts/Gyre-Termes",
        "unpacked/jax/output/SVG/fonts/Gyre-Termes"
      ],
      fontLatinModern: [
        "fonts/HTML-CSS/Latin-Modern",
        "jax/output/HTML-CSS/fonts/Latin-Modern",
        "unpacked/jax/output/HTML-CSS/fonts/Latin-Modern",
        "jax/output/SVG/fonts/Latin-Modern",
        "unpacked/jax/output/SVG/fonts/Latin-Modern"
      ],
      fontNeoEuler: [
        "fonts/HTML-CSS/Neo-Euler",
        "jax/output/HTML-CSS/fonts/Neo-Euler",
        "unpacked/jax/output/HTML-CSS/fonts/Neo-Euler",
        "jax/output/SVG/fonts/Neo-Euler",
        "unpacked/jax/output/SVG/fonts/Neo-Euler"
      ],
      fontStix: [
        "fonts/HTML-CSS/STIX",
        "jax/output/HTML-CSS/fonts/STIX",
        "unpacked/jax/output/HTML-CSS/fonts/STIX",
        "jax/output/SVG/fonts/STIX",
        "unpacked/jax/output/SVG/fonts/STIX"
      ],
      fontStixWeb: [
        "fonts/HTML-CSS/STIX-Web",
        "jax/output/HTML-CSS/fonts/STIX-Web",
        "unpacked/jax/output/HTML-CSS/fonts/STIX-Web",
        "jax/output/SVG/fonts/STIX-Web",
        "unpacked/jax/output/SVG/fonts/STIX-Web"
      ],
      fontTeX: [
        "fonts/HTML-CSS/TeX",
        "jax/output/HTML-CSS/fonts/TeX",
        "unpacked/jax/output/HTML-CSS/fonts/TeX",
        "jax/output/SVG/fonts/TeX",
        "unpacked/jax/output/SVG/fonts/TeX"
      ],
      dropFonts: [
        "fonts",
      ],
      eot: [
        "fonts/**/eot"
      ],
      otf: [
        "fonts/**/otf"
      ],
      png: [
        "fonts/**/png"
      ],
      svg: [
        "fonts/**/svg"
      ],
      woff: [
        "fonts/**/woff"
      ],
      asciimathInput: [
        "config/AM*",
        "config/TeX-MML-AM*",
        "jax/input/AsciiMath",
        "unpacked/config/AM*",
        "unpacked/config/TeX-MML-AM*",
        "unpacked/jax/input/AsciiMath"
      ],
      mathmlInput: [
        "config/MML*",
        "config/TeX-MML*",
        "config/TeX-AMS-MML*",
        "jax/input/TeX",
        "unpacked/config/TeX*",
        "unpacked/jax/input/TeX"
      ],
      texInput: [
        "config/TeX*",
        "jax/input/TeX",
        "unpacked/config/TeX*",
        "unpacked/jax/input/TeX",
      ],
      extensionsAsciimath: [
        "extensions/asciimath2jax.js",
        "unpacked/extensions/asciimath2jax.js"
      ],
      extensionsMathml: [
        "extensions/MathML",
        "extensions/mml2jax.js",
        "unpacked/extensions/MathML",
        "unpacked/extensions/mml2jax.js"
      ],
      extensionsTeX: [
        "extensions/TeX",
        "extensions/jsMath2jax.js",
        "extensions/tex2jax.js",
        "unpacked/extensions/TeX",
        "unpacked/extensions/jsMath2jax.js",
        "unpacked/extensions/tex2jax.js"
      ],
      extensionHtmlCss: [
        "extensions/HTML-CSS",
        "unpacked/extensions/HTML-CSS"
      ],
      htmlCssOutput: [
        "config/*HTMLorMML.js",
        "config/*HTMLorMML-full.js",
        "unpacked/config/*HTMLorMML.js",
        "unpacked/config/*HTMLorMML-full.js",
        "jax/output/HTML-CSS",
        "unpacked/jax/output/HTML-CSS"
      ],
      mathmlOutput: [
        "config/*HTMLorMML.js",
        "config/*HTMLorMML-full.js",
        "unpacked/config/*HTMLorMML.js",
        "unpacked/config/*HTMLorMML-full.js",
        "jax/output/NativeMML",
        "unpacked/jax/output/NativeMML"
      ],
      svgOutput: [
        "config/*SVG.js",
        "config/*SVG-full.js",
        "unpacked/config/*HTMLorMML.js",
        "unpacked/config/*HTMLorMML-full.js",
        "jax/output/SVG",
        "unpacked/jax/output/SVG"
      ],
      locales: [
        "localization",
        "unpacked/localization"
      ],
      miscConfig: [
        "config/local",
        "unpacked/config/local",
        "config/Accessible-full.js",
        "unpacked/config/Accessible-full.js",
        "config/Accessible.js",
        "unpacked/config/Accessible.js",
        "config/default.js",
        "unpacked/config/default.js",
        "config/Safe.js",
        "unpacked/config/Safe.js"
    ],
      miscExtensions: [
        "extensions/FontWarnings.js",
        "extensions/HelpDialog.js",
        "extensions/MatchWebFonts.js",
        "extensions/MathEvents.js",
        "extensions/MathMenu.js",
        "extensions/MathZoom.js",
        "extensions/Safe.js",
        "unpacked/extensions/FontWarnings.js",
        "unpacked/extensions/HelpDialog.js",
        "unpacked/extensions/MatchWebFonts.js",
        "unpacked/extensions/MathEvents.js",
        "unpacked/extensions/MathMenu.js",
        "unpacked/extensions/MathZoom.js",
        "unpacked/extensions/Safe.js",
        ],
      images: [
        "images"
      ],
      notcode: [
        ".gitignore",
        "docs",
        "test",
        "CONTRIBUTING.md",
        "README-branch.txt",
        "README.md",
        "bower.json",
        "composer.json"
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

   grunt.registerTask('TexCSS', [
        'clean:unpacked',
        'clean:fontAsana', 
        'clean:fontGyrePagella', 
        'clean:fontGyreTermes', 
        'clean:fontLatinModern', 
        'clean:fontNeoEuler', 
        'clean:fontStix', 
        'clean:fontStixWeb', 
        'clean:eot', 
        'clean:otf', 
        'clean:png', 
        'clean:svg', 
        'clean:asciimathInput',
        'clean:svgOutput', 
        'clean:extensionsAsciimath', 
        'clean:extensionsMathml',
        'clean:locales',
        'clean:notcode'
    ]);
}
