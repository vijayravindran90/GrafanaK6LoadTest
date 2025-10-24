import { scenario_1 } from './V2/getBreeds.js'

export const options = {
    cloud: {
     projectID: 3817278,
    // Test runs with the same name groups test runs together
    name: 'k6 test',
    distribution: { 'amazon:gb:london': { loadZone: 'amazon:gb:london', percent: 100 }},
    apm: [],
  },
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      stages: [
        { target: 20, duration: '1m' },
        { target: 20, duration: '3m30s' },
        { target: 0, duration: '1m' },
      ],
      exec: 'scenario_1',
    },
  },
}

export { scenario_1 }