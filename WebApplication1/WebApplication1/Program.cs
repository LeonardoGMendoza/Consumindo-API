using Microsoft.EntityFrameworkCore;
using WebApplication1;
using WebApplication1.Business;
using WebApplication1.Model.Interfaces;
using WebApplication1.Repository;
using WebApplication1.Repository.Context;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//injection
builder.Services.AddTransient<IStudentRepository, StudentRepository>();
builder.Services.AddTransient<IStudentBusiness, StudentBusiness>();


builder.Services.AddDbContext<StudentContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoDBPlaca")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


// Habilita o CORS
app.UseCors(builder =>
{
    builder.WithOrigins("http://localhost:3000") // Permitir apenas a origem especificada
           .AllowAnyMethod() // Permitir qualquer método HTTP
           .AllowAnyHeader(); // Permitir qualquer cabeçalho
});


app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
