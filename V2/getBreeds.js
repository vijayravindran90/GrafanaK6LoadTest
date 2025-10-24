import { sleep } from 'k6'
import http from 'k6/http'

export const options = {
  cloud: {
     projectID: 3817278,
    // Test runs with the same name groups test runs together
    name: 'k6 Breeds Loads test',
    distribution: { 'amazon:gb:london': { loadZone: 'amazon:gb:london', percent: 100 }},
    apm: [],
  },
  thresholds: {
    'http_req_duration{url:https://dogapi.dog/api/v2/breeds?page%5Bnumber%5D=2&page%5Bsize%5D=20}':
      ['p(95)<500', 'p(99)<1500']
  },
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 20, duration: '1m' },
        { target: 20, duration: '3m30s' },
        { target: 0, duration: '1m' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  // ACA Search Service
  response = http.get(
    'hhttps://dogapi.dog/api/v2/breeds?page%5Bnumber%5D=2&page%5Bsize%5D=20'
  )

  // Automatically added sleep
  sleep(1)
}