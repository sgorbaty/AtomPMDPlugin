## ATOM + PMD

- Install *Atom* editor with *build* and *linter* plugins
- Create  *.atom-build.js* file and place it in your project folder
```javascript
var PMD_REGEXP = "(?<file>[\\/0-9a-zA-Z\\._]+):(?<line>\\d+):(?<col>\\d+):\\s+(?<message>.+)";
var PMD_PATH = '~/pmd/pmd-dist/target/pmd-bin-5.5.2-SNAPSHOT/bin';

module.exports = {
  cmd: ''+PMD_PATH+'/run.sh pmd -d `pwd` -f atomtext -language apex -rulesets apex-security 2>/dev/null',
  name: 'PMDApex',
  sh: true,
  warningMatch: [
    PMD_REGEXP
  ]
}
```
- Checkout PMD into ~/pmd
```bash
git clone git@github.com:sgorbaty/pmd.git
```
- Build PMD
```bash
mvn clean package
```
- Unzip PMD project
```bash
cd pmd-dist/target
unzip pmd-bin-5.5.2-SNAPSHOT.zip 
```
- Hit **F9** command from *Atom*



