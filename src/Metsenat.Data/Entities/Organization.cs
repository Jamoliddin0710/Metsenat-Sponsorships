namespace Metsenat.Data.Entities;
public class Organization
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public virtual List<Sponsor>? Sponsors { get; set; }
}
