// ! M_Teeth/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDistanceFieldShadowsLightMapAndCSMLightingPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_StaticShadowMapMasks(0,4),PrecomputedLightingBuffer_InvUniformPenumbraSizes(4,4),PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:732-0:h:24:3,0:748-0:h:28:4,0:752-0:h:32:32,0:786-0:m:8:1,0:792-0:h:64:3,0:987-0:h:68:1,0:988-0:h:72:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:0-4:h:0:4,4:4-4:h:4:4,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(6:1[LightmapResourceCluster_LightMapSampler]),LightmapResourceCluster_StaticShadowTexture(7:1[LightmapResourceCluster_StaticShadowTextureSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(8:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(9:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(10:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(11:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(12:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(13:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(14:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(15:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(16:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(17:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(18:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(19:1[Material_Texture2D_10Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
#define in_var_TEXCOORD4 in_TEXCOORD4
#define in_var_TEXCOORD0 in_TEXCOORD0
#define in_var_TEXCOORD11 in_TEXCOORD11
#define in_var_TEXCOORD10 in_TEXCOORD10
#extension GL_EXT_control_flow_attributes : require
#define SPIRV_CROSS_FLATTEN [[flatten]]
#define SPIRV_CROSS_BRANCH [[dont_flatten]]
#define SPIRV_CROSS_UNROLL [[unroll]]
#define SPIRV_CROSS_LOOP [[dont_unroll]]
#else
#define SPIRV_CROSS_FLATTEN
#define SPIRV_CROSS_BRANCH
#define SPIRV_CROSS_UNROLL
#define SPIRV_CROSS_LOOP
#endif
precision mediump float;
precision highp int;

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[18])
#define View_bSubsurfacePostprocessEnabled (pc0_h[17].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[16].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_MobileSkyIrradianceEnvironmentMap(Offset) (pc0_h[8 + int(Offset)])
#define View_SkyLightColor (pc0_h[7])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[6].xyz)
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps6
#define SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler ps7
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps16
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps17
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps18
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps19
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[19];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define Primitive_Flags (pc2_u[0].x)
uniform uvec4 pc2_u[1];


#define MobileBasePass_Forward_LightGridZParams (pc3_h[0].xyz)
#define MobileBasePass_Forward_LightGridPixelSizeShift (pc3_u[1].x)
#define MobileBasePass_Forward_CulledGridSize (pc3_i[0].xyz)
#define MobileBasePass_Forward_NumLocalLights (pc3_u[0].x)
uniform highp vec4 pc3_h[1];
uniform ivec4 pc3_i[1];
uniform uvec4 pc3_u[2];


#define PrecomputedLightingBuffer_LightMapAdd(Offset) (pc4_m[2 + int(Offset)])
#define PrecomputedLightingBuffer_LightMapScale(Offset) (pc4_m[0 + int(Offset)])
#define PrecomputedLightingBuffer_InvUniformPenumbraSizes (pc4_h[1])
#define PrecomputedLightingBuffer_StaticShadowMapMasks (pc4_h[0])
uniform mediump vec4 pc4_m[4];
uniform highp vec4 pc4_h[2];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightScreenToShadow(Offset) (mat4(pc5_h[0 + (int(Offset) * 4) + 0].xyzw,pc5_h[0 + (int(Offset) * 4) + 1].xyzw,pc5_h[0 + (int(Offset) * 4) + 2].xyzw,pc5_h[0 + (int(Offset) * 4) + 3].xyzw))
#define MobileDirectionalLight_DirectionalLightShadowDistances (pc5_m[4])
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[3])
#define MobileDirectionalLight_DirectionalLightShadowSize (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform highp vec4 pc5_h[16];
uniform mediump vec4 pc5_m[5];


#define Material_PreshaderBuffer_7 (pc6_h[6])
#define Material_PreshaderBuffer_6 (pc6_h[5])
#define Material_PreshaderBuffer_5 (pc6_h[4])
#define Material_PreshaderBuffer_4 (pc6_h[3])
#define Material_PreshaderBuffer_3 (pc6_h[2])
#define Material_PreshaderBuffer_2 (pc6_h[1])
#define Material_PreshaderBuffer_1 (pc6_h[0])
uniform highp vec4 pc6_h[7];


layout(binding = 0) uniform highp samplerBuffer ps0;
layout(binding = 1) uniform highp usamplerBuffer ps1;
layout(binding = 2) uniform highp usamplerBuffer ps2;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler;
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec3 _542;
vec4 _543;
vec3 _544;

void main()
{
    highp float _554 = 1.0 / gl_FragCoord.w;
    highp vec2 _572 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _581 = vec4(((_572 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _554;
    highp vec3 _590;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _590 = -View_ViewForward;
    }
    else
    {
        _590 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _188 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _601 = vec4(_188, sqrt(clamp(1.0 - dot(_188, _188), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _96 = _601.z + 1.0;
    vec2 _195 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _612 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _615 = _612.x * Material_PreshaderBuffer_1.w;
    vec3 _100 = vec4(_195, sqrt(clamp(1.0 - dot(_195, _195), 0.0, 1.0)), 1.0).xyz * vec3(_615, _615, 1.0);
    vec3 _105 = vec3(_601.xy, _96);
    vec3 _109 = vec3(_100.xy * vec2(-1.0), _100.z);
    vec3 _115 = (_105 * vec3(dot(_105, _109))) - (vec3(_96) * _109);
    float _117 = _115.z + 1.0;
    vec2 _202 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _628 = mix(vec3(0.0, 0.0, 1.0), vec4(_202, sqrt(clamp(1.0 - dot(_202, _202), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _125 = vec3(_115.xy, _117);
    vec3 _129 = vec3(_628.xy * vec2(-1.0), _628.z);
    vec3 _135 = (_125 * vec3(dot(_125, _129))) - (vec3(_117) * _129);
    float _137 = _135.z + 1.0;
    highp vec4 _632 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _209 = (_632.xy * vec2(2.0)) - vec2(1.0);
    highp float _635 = sqrt(clamp(1.0 - dot(_209, _209), 0.0, 1.0));
    vec3 _142 = vec3(_135.xy, _137);
    vec3 _145 = vec3(vec4(_209, _635, 1.0).xy * vec2(-1.0), _635);
    vec3 _152 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_142 * vec3(dot(_142, _145))) - (vec3(_137) * _145))) * 1.0;
    highp vec3 _640 = (-_590) + ((_152 * dot(_152, _590)) * 2.0);
    highp vec4 _644 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _651 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _655 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _153 = _644.xyz;
    highp vec4 _662 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _668 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _164 = _668.x;
    vec3 _166 = mix(mix(_153, _651.xyz * (_153 / _655.xyz), vec3(0.669921875)), (_662.xyz * (_153 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_164));
    highp vec4 _675 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _218 = _675.x;
    float _219 = _675.y;
    float _216 = _675.z;
    vec3 _175 = _612.xyz;
    vec3 _177 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _224 = clamp(mix(_166, _166 * vec3((_218 <= 0.0) ? 0.0 : pow(_218, 0.300048828125), (_219 <= 0.0) ? 0.0 : pow(_219, 0.300048828125), (_216 <= 0.0) ? 0.0 : pow(_216, 0.300048828125)), vec3(_164 * clamp(1.0 - ((1.0 - _668.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _175, vec3(0.0), vec3(1.0));
    float _225 = clamp((_175 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_590, _177)) * _177) * vec3(2.0)) - _590, _590)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _697 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _164), 0.0, 1.0));
    vec3 _228 = dFdx(_152);
    vec3 _229 = dFdy(_152);
    highp float _703 = clamp(pow(max(dot(_228, _228), dot(_229, _229)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _233 = vec3(0.07999999821186065673828125 * _225);
    highp vec2 _707 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _712 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _707);
    vec3 _241 = (_712.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _254 = dot(_241, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _253 = (exp2((_254 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _707 + vec2(0.0, 0.5)) * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_152.yzx, 1.0)));
    highp vec4 _728 = vec4(_152, 1.0);
    highp vec3 _732 = _542;
    _732.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _728);
    highp vec3 _736 = _732;
    _736.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _728);
    highp vec3 _740 = _736;
    _740.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _728);
    vec3 _255 = max(vec3(0.0), _740) * View_SkyLightColor.xyz;
    highp vec4 _746 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler, in_var_TEXCOORD4.zw);
    highp vec4 _753 = clamp((_746 * PrecomputedLightingBuffer_InvUniformPenumbraSizes) + ((PrecomputedLightingBuffer_InvUniformPenumbraSizes * (-0.5)) + vec4(0.5)), vec4(0.0), vec4(1.0));
    highp vec4 _757 = (PrecomputedLightingBuffer_StaticShadowMapMasks * _753) * _753;
    highp float _758 = _581.w;
    highp vec4 _782;
    int _765 = 0;
    for (;;)
    {
        if (_765 < 4)
        {
            if (_758 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_765)])
            {
                _782 = MobileDirectionalLight_DirectionalLightScreenToShadow(_765) * vec4(_581.xy, _758, 1.0);
                break;
            }
            _765++;
            continue;
        }
        else
        {
            _782 = vec4(0.0);
            break;
        }
    }
    float _402;
    if (_782.z > 0.0)
    {
        highp vec2 _792 = (_782.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _793 = fract(_792);
        highp vec2 _797 = (floor(_792) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _803 = vec4((min(1.0 - _782.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _805 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _797, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _803, vec4(0.0), vec4(1.0));
        highp vec4 _810 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _797, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _803, vec4(0.0), vec4(1.0));
        highp vec4 _815 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _797, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _803, vec4(0.0), vec4(1.0));
        highp vec4 _820 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _797, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _803, vec4(0.0), vec4(1.0));
        highp float _822 = _793.x;
        highp float _823 = 1.0 - _822;
        highp vec4 _850 = _543;
        _850.x = (((_805.w * _823) + _805.z) + _810.w) + (_810.z * _822);
        highp vec4 _854 = _850;
        _854.y = (((_805.x * _823) + _805.y) + _810.x) + (_810.y * _822);
        highp vec4 _858 = _854;
        _858.z = (((_815.w * _823) + _815.z) + _820.w) + (_820.z * _822);
        highp vec4 _862 = _858;
        _862.w = (((_815.x * _823) + _815.y) + _820.x) + (_820.y * _822);
        highp float _863 = _793.y;
        highp float _872 = clamp((_758 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _402 = mix(dot(_862, vec4(1.0 - _863, 1.0, 1.0, _863) * 0.111111111938953399658203125), 1.0, _872 * _872);
    }
    else
    {
        _402 = 1.0;
    }
    highp vec4 _891 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _271 = _402 * mix(1.0, dot(_757, _891), dot(_891, vec4(1.0)));
    highp float _895 = max(0.0, dot(_152, normalize(_590 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _898 = uint(((vec4(_544.x, _544.y, _544.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _907 = (vec2(uvec2(5u, _898)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _909 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _907, 0.0);
    float _285 = _909.z;
    highp float _912 = max(clamp(_697 * (_909.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _289 = clamp(_697 * (_909.y * 2.0), 0.0, 1.0);
    float _275 = mix(_912, _289, _285);
    float _276 = dot(_152, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _919 = float(_898);
    highp vec2 _928 = (vec2(uvec2(0u, _898)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _931 = vec3(1.0) * max(0.0, dot(_152, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _292 = _224 * 0.318407952785491943359375;
    highp float _936 = 1.0 - (_895 * _895);
    float _293 = _912 * _912;
    highp float _937 = _895 * _293;
    highp float _939 = _293 / (_936 + (_937 * _937));
    float _297 = _289 * _289;
    highp float _940 = _895 * _297;
    highp float _942 = _297 / (_936 + (_940 * _940));
    vec4 _311 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _275) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _312 = _311.x;
    float _315 = exp2((-9.28125) * clamp(abs(dot(_152, _590)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _322 = (vec2(-1.0400390625, 1.0400390625) * ((min(_312 * _312, _315) * _312) + _311.y)) + _311.zw;
    float _306 = clamp(_225 * 4.0, 0.0, 1.0);
    uvec2 _980 = uvec2(uint(_572.x), uint(_572.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _403;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _403 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _640, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_697, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _403 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _640, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_697, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _346 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _697) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _347 = _346.x;
    vec2 _355 = (vec2(-1.0400390625, 1.0400390625) * ((min(_347 * _347, _315) * _347) + _346.y)) + _346.zw;
    highp vec3 _1028 = ((((_241 * (_253 / max(9.9999997473787516355514526367188e-06, _254))) + _255) * _224) + ((((mix(_931 * _271, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_276 - (max(2.0 * _276, 0.4000000059604644775390625) * (1.0 - sqrt(_271))), -1.0) * 0.5) + 0.5, _703, _919), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _928, 0.0).xyz) * _292) * 1.0) + ((_931 * (((_233 * _322.x) + vec3(_306 * _322.y)) * (mix(min(_939 * _939, 2048.0), min(_942 * _942, 2048.0), _285) * ((_275 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _271))) + (((_403 * mix(1.0, min((_253 + dot(_255, vec3(0.300048828125, 0.58984375, 0.1099853515625))) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_697 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_233 * _355.x) + vec3(_306 * _355.y)));
    uint _1029 = ((((min(uint(max(0.0, log2((_554 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _980.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _980.x) * 2u;
    uvec4 _1037 = texelFetch(ps1, int(_1029 + 1u));
    uint _1038 = _1037.x;
    uint _1053 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _1054 = min(min(texelFetch(ps1, int(_1029)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1056;
    _1056 = _1028;
    highp vec3 _1057;
    SPIRV_CROSS_LOOP
    for (uint _1059 = 0u; _1059 < _1054; _1056 = _1057, _1059++)
    {
        uint _1068 = texelFetch(ps2, int(_1038 + _1059)).x * 6u;
        highp vec4 _1070 = texelFetch(ps0, int(_1068));
        highp vec4 _1072 = texelFetch(ps0, int(_1068 + 1u));
        highp vec4 _1074 = texelFetch(ps0, int(_1068 + 2u));
        highp vec4 _1076 = texelFetch(ps0, int(_1068 + 3u));
        highp float _1077 = _1070.w;
        highp float _1078 = _1077 * _1077;
        highp vec3 _1079 = _1070.xyz;
        highp vec3 _1080 = in_var_TEXCOORD8.xyz - _1079;
        if ((dot(_1080, _1080) * _1078) > 1.0)
        {
            _1057 = _1056;
            continue;
        }
        uint _1087 = floatBitsToUint(_1074.w);
        if (((_1087 >> 8u) & _1053) == 0u)
        {
            _1057 = _1056;
            continue;
        }
        highp float _1096 = _1072.w;
        highp vec4 _1111 = vec4(float((_1087 & 1u) != 0u), float((_1087 & 2u) != 0u), float((_1087 & 4u) != 0u), float((_1087 & 8u) != 0u));
        highp vec3 _1112 = _1079 - in_var_TEXCOORD8.xyz;
        highp float _1113 = dot(_1112, _1112);
        highp vec3 _1115 = _1112 * inversesqrt(_1113);
        highp float _1132;
        if (_1096 == 0.0)
        {
            highp float _1124 = _1113 * _1078;
            highp float _1127 = clamp(1.0 - (_1124 * _1124), 0.0, 1.0);
            _1132 = (_1127 * _1127) * (1.0 / (_1113 + 1.0));
        }
        else
        {
            highp vec3 _1119 = _1112 * _1077;
            _1132 = pow(1.0 - clamp(dot(_1119, _1119), 0.0, 1.0), _1096);
        }
        highp float _1143;
        if (((_1087 >> 16u) & 3u) == 2u)
        {
            highp float _1140 = clamp((dot(_1115, _1074.xyz) - _1076.x) * _1076.y, 0.0, 1.0);
            _1143 = _1132 * (_1140 * _1140);
        }
        else
        {
            _1143 = _1132;
        }
        highp vec3 _1190;
        SPIRV_CROSS_BRANCH
        if (_1143 > 0.0)
        {
            float _359 = mix(1.0, dot(_757, _1111), dot(_1111, vec4(1.0)));
            highp float _1151 = max(0.0, dot(_152, normalize(_590 + _1115)));
            highp vec4 _1153 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _907, 0.0);
            float _369 = _1153.z;
            highp float _1156 = max(clamp(_697 * (_1153.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _373 = clamp(_697 * (_1153.y * 2.0), 0.0, 1.0);
            float _360 = mix(_1156, _373, _369);
            float _361 = dot(_152, _1115);
            highp vec3 _1168 = vec3(1.0) * max(0.0, dot(_152, _1115));
            highp float _1173 = 1.0 - (_1151 * _1151);
            float _376 = _1156 * _1156;
            highp float _1174 = _1151 * _376;
            highp float _1176 = _376 / (_1173 + (_1174 * _1174));
            float _380 = _373 * _373;
            highp float _1177 = _1151 * _380;
            highp float _1179 = _380 / (_1173 + (_1177 * _1177));
            vec4 _392 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _360) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _393 = _392.x;
            vec2 _401 = (vec2(-1.0400390625, 1.0400390625) * ((min(_393 * _393, _315) * _393) + _392.y)) + _392.zw;
            _1190 = (((mix(_1168 * _359, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_361 - (max(2.0 * _361, 0.4000000059604644775390625) * (1.0 - sqrt(_359))), -1.0) * 0.5) + 0.5, _703, _919), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _928, 0.0).xyz) * _292) * 1.0) + ((_1168 * (((_233 * _401.x) + vec3(_306 * _401.y)) * (mix(min(_1176 * _1176, 2048.0), min(_1179 * _1179, 2048.0), _369) * ((_360 * 0.25) + 0.25)))) * 1.0)) * ((_1072.xyz * _1143) * _359);
        }
        else
        {
            _1190 = vec3(0.0);
        }
        _1057 = _1056 + _1190;
    }
    vec3 _79 = _1056 * 1.0;
    vec4 _404 = vec4(_79.x, _79.y, _79.z, _543.w);
    _404.w = 0.0;
    highp vec3 _1193 = min((_404.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1193.x, _1193.y, _1193.z, _404.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

