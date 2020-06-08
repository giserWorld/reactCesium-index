import React ,{ Component }from 'react';
import 'cesium/Widgets/widgets.css';//导入cesium样式
import './testCesium.css';//测试样式
//import Cesium from 'cesium/Cesium';//导入cesium对象(amd老版本)
//import Cesium from 'cesium/Cesium';
//import CesiumNavigation from "../../components/cesium/customPlugins/modulesES6/cesium-navigation-es6";
let Cesium = require('cesium/Cesium');//导入cesium对象(es6新版本都支持)

class testCesium extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"测试cesium",
        }
    }
    render(){
        return(
            <div className="wrap mainMap">
                 <div id="cesiumDiv" />
            </div>
        )
    }
    componentDidMount(){
        let baseLayer=new Cesium.UrlTemplateImageryProvider({//在线影像、离线影像
            url:"http://mt3.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}",
            maximumLevel:20,
            tilingScheme: new Cesium.WebMercatorTilingScheme({
                ellipsoid: Cesium.Ellipsoid.WGS84
            })
        });
        //创建地图
        let viewer=new Cesium.Viewer("cesiumDiv",{
            animation:false,//
            fullscreenButton:false,//全屏组件
            baseLayerPicker:false,//底图影像拾取器组件
            geocoder:false,
            homeButton:false,
            timeline:false,
            navigationHelpButton:false,
            sceneModePicker:false,
            infoBox:false,//是否显示拾取信息框
            selectionIndicator:false,//要素选择框
            mapProjection: new Cesium.WebMercatorProjection(),//地图坐标系(WGS84或墨卡托)
            sceneMode: Cesium.SceneMode.SCENE3D,//初始场景模式
            scene3DOnly:true,//如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
            imageryProvider:baseLayer,//底图影像提供者，默认加载cesium影像，必须设置该属性，否则加载cesium影像
            //terrainProvider:marsTerrain,//地形
        });
        var options = {};
        // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
        options.defaultResetView = Cesium.Rectangle.fromDegrees(80, 22, 130, 50);
        // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
        options.enableCompass= true;
        // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
        options.enableZoomControls= true;
        // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
        options.enableDistanceLegend= true;
        // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
        options.enableCompassOuterRing= true;
        
        //CesiumNavigation(viewer, options);
    }
}
export default testCesium;