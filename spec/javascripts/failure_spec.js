
fdescribe('whatever, just give me failure!', function() {
  it('is skipped');
  it('fails', function() {
    expect(3).toBe(1);
    fail("designed failure")
  });
});
