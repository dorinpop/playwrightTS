import { test, expect } from '@playwright/test';

test('get beers', async ({ request }) => {
  
    const response = await request.get(`/api/v2/beers`);
    const responseBody = await response.json();

    expect(response).toBeOK();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toMatch(/\b[\w\s'".-]+\b/);
});