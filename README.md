#ATOM + PMD

1. Install *Atom* editor with *build* and *linter* plugins
2. Create  *.atom-build.js* file and place it in your project file

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

3. Checkout PMD into ~/pmd
```bash
git clone git@github.com:sgorbaty/pmd.git
```
4. Build PMD
```bash
mvn clean package
```
5. Unzip PMD project
```bash
cd pmd-dist/target
unzip pmd-bin-5.5.2-SNAPSHOT.zip 
```
6. Hit **F9** command from *Atom*



