import semver from 'semver';
import { process } from 'node';

const currentVersion = process.argv[2];
const newVersion = process.argv[3];

if (semver.gt(currentVersion, newVersion)) {
  console.log(`Current version: ${currentVersion} is greater than the new version: ${newVersion}. Cancelling the release...`);
  process.exit(1);
} else {
    console.log(`Current version: ${currentVersion} is less than the new version: ${newVersion}. Proceeding with the release...`);
    process.exit(0);
}
