<?php
namespace Piwik\Plugins\TheBlueOne;

class TheBlueOne extends \Piwik\Plugin
{
    // Declares this plugin is a theme (redundant with plugin.json "theme": true, but OK)
    public function isTheme()
    {
        return true;
    }

    public function registerEvents()
    {
        return [
            // Load our JS after UI is ready to wire the dark toggle
            'AssetManager.getJavaScriptFiles' => 'provideJsAssets',
            // Load our LESS/CSS
            'AssetManager.getStylesheetFiles' => 'provideCssAssets',
        ];
    }

    public function provideJsAssets(&$jsFiles)
    {
        $jsFiles[] = 'plugins/TheBlueOne/javascripts/dark-toggle.js';
    }

    public function provideCssAssets(&$cssFiles)
    {
        // Matomo compiles LESS automatically when listing assets
        $cssFiles[] = 'plugins/TheBlueOne/stylesheets/theme.css';
    }
}
