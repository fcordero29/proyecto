describe('Test Página Hola Mundo', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080');
  });

  test('Debe mostrar el mensaje principal', async () => {
    const html = await page.content();
    expect(html).toContain("Bienvenido a la práctica final del curso de DevOps con CI/CD utilizando GitHub.");
  });

  test('Debe mostrar el título ¡Hola Mundo!', async () => {
    const html = await page.content();
    expect(html).toContain("¡Hola Mundo!");
  });
});
