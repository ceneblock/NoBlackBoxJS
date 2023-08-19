const draw={};

draw.path=(ctx,path,color="black")=>{
  ctx.strokeStyle=color;
  ctx.lineWidth=3;
  ctx.beginPath();
  ctx.moveTo(...path[0]);

  for(let x = 1; x < path.length; x++)
  {
    ctx.lineTo(...path[x]);
  }
  ctx.lineCap="round";
  ctx.lineJoin="round";
  ctx.stroke();
}

draw.paths=(ctx, paths, color="black")=>{
  for(const path of paths)
  {
    draw.path(ctx, path, color);
  }
}
