const fs = require('fs');
const yaml = require('js-yaml');

// Function to read and parse YAML file
function readYAMLFile(filePath) {
  try {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    // Parse the YAML content
    const data = yaml.load(fileContent);
    return data;
  } catch (e) {
    console.log(e);
  }
}

// Path to your YAML file
const filePath = './test.yaml';

// Read and parse the YAML file
const yamlData = readYAMLFile(filePath);

// Accessing the data
console.log(yamlData);

// Example: Accessing specific parts of the data
yamlData.forEach((item, index) => {
  console.log(`Deposit Data ${index + 1}:`);
  console.log(`  Pubkey: ${item.deposit_data.pubkey}`);
  console.log(`  Amount: ${item.deposit_data.amount}`);
  console.log(`  Deposit Root: ${item.deposit_data_root}`);
  console.log(`  Block Height: ${item.block_height}`);
  console.log('  Snapshot Finalized:');
  item.snapshot.finalized.forEach(finalizedBlock => {
    console.log(`    - ${finalizedBlock}`);
  });
  console.log(`deposit root : ${typeof(item.snapshot.deposit_root)}`);
  console.log('\n');
});
