<?php

/**
 * Implementation of hook_ctools_plugin_api().
 */
function homepage_slideshow_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => 1);
  }
}

/**
 * Implementation of hook_node_info().
 */
function homepage_slideshow_node_info() {
  $items = array(
    'home_slideshow' => array(
      'name' => t('Homepage Slideshow'),
      'module' => 'features',
      'description' => t('Use for adding/editing homepage slideshow'),
      'has_title' => '1',
      'title_label' => t('Slideshow Headline'),
      'has_body' => '0',
      'body_label' => '',
      'min_word_count' => '0',
      'help' => '',
    ),
  );
  return $items;
}

/**
 * Implementation of hook_views_api().
 */
function homepage_slideshow_views_api() {
  return array(
    'api' => '2',
  );
}
