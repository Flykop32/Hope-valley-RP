(function(){
  const cfg = window.HVRP || {};
  const setText = (id, txt) => { const el=document.getElementById(id); if(el) el.textContent = txt || ""; };
  const setHref = (id, href) => { const el=document.getElementById(id); if(el && href && !href.includes("PASTE_")) el.href = href; };
  setText("serverName", cfg.serverName);
  setText("serverName2", cfg.serverName);
  setText("tagline", cfg.brandTagline);
  setText("region", cfg.serverRegion);
  setText("whitelistHow", cfg.whitelistHow);
  setText("connectCmd", cfg.connectCommand);
  setHref("discordLink", cfg.discordUrl);
  setHref("discordLink2", cfg.discordUrl);
  setHref("discordLink3", cfg.discordUrl);

  // If placeholders still exist, show a friendly nudge.
  const warn = document.getElementById("setupWarn");
  const needs = (!cfg.discordUrl || cfg.discordUrl.includes("PASTE_") || !cfg.connectCommand || cfg.connectCommand.includes("PASTE_"));
  if (warn) warn.style.display = needs ? "block" : "none";
})();
