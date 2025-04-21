describe('Test Página Hola Mundo', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080');
  });

  test('Debe mostrar texto \"Práctica DevOps CI/CD\"', async () => {
    await expect(page).toMatch('Práctica DevOps CI/CD');
  });
});
