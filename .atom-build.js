var PMD_REGEXP = "(?<file>[\\/0-9a-zA-Z\\._]+):(?<line>\\d+):(?<col>\\d+):\\s+(?<message>.+)";
var PMD_PATH = '/Users/sergey.gorbaty/Documents/research/pmd/pmd-dist/target/pmd-bin-5.5.2-SNAPSHOT/bin';

module.exports = {
  cmd: ''+PMD_PATH+'/run.sh pmd -d `pwd` -f atomtext -language apex -rulesets apex-security 2>/dev/null',
  name: 'PMDApex',
  sh: true,
  warningMatch: [
    PMD_REGEXP
  ]
}
