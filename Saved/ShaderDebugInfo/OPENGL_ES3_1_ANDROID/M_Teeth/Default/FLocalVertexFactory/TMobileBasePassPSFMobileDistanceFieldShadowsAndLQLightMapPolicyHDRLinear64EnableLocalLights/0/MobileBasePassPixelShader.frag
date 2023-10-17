// ! M_Teeth/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDistanceFieldShadowsAndLQLightMapPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_StaticShadowMapMasks(0,4),PrecomputedLightingBuffer_InvUniformPenumbraSizes(4,4),PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:732-0:h:20:3,0:748-0:h:24:4,0:786-0:m:8:1,0:792-0:h:28:3,0:987-0:h:32:1,0:988-0:h:36:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:0-4:h:0:4,4:4-4:h:4:4,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:12-5:m:8:4,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(6:1[LightmapResourceCluster_LightMapSampler]),LightmapResourceCluster_StaticShadowTexture(7:1[LightmapResourceCluster_StaticShadowTextureSampler]),Material_Texture2D_0(8:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(9:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(10:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(11:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(12:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(13:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(14:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(15:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(16:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(17:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(18:1[Material_Texture2D_10Sampler])
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

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[9])
#define View_bSubsurfacePostprocessEnabled (pc0_h[8].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[7].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[6])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[5].xyz)
#define View_PreExposure (pc0_h[4].x)
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps6
#define SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps16
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps17
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps18
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[10];


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
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform mediump vec4 pc5_m[3];


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

vec4 _518;
vec3 _519;

void main()
{
    highp vec3 _550;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _550 = -View_ViewForward;
    }
    else
    {
        _550 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _185 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _561 = vec4(_185, sqrt(clamp(1.0 - dot(_185, _185), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _93 = _561.z + 1.0;
    vec2 _192 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _572 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _575 = _572.x * Material_PreshaderBuffer_1.w;
    vec3 _97 = vec4(_192, sqrt(clamp(1.0 - dot(_192, _192), 0.0, 1.0)), 1.0).xyz * vec3(_575, _575, 1.0);
    vec3 _102 = vec3(_561.xy, _93);
    vec3 _106 = vec3(_97.xy * vec2(-1.0), _97.z);
    vec3 _112 = (_102 * vec3(dot(_102, _106))) - (vec3(_93) * _106);
    float _114 = _112.z + 1.0;
    vec2 _199 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _588 = mix(vec3(0.0, 0.0, 1.0), vec4(_199, sqrt(clamp(1.0 - dot(_199, _199), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _122 = vec3(_112.xy, _114);
    vec3 _126 = vec3(_588.xy * vec2(-1.0), _588.z);
    vec3 _132 = (_122 * vec3(dot(_122, _126))) - (vec3(_114) * _126);
    float _134 = _132.z + 1.0;
    highp vec4 _592 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _206 = (_592.xy * vec2(2.0)) - vec2(1.0);
    highp float _595 = sqrt(clamp(1.0 - dot(_206, _206), 0.0, 1.0));
    vec3 _139 = vec3(_132.xy, _134);
    vec3 _142 = vec3(vec4(_206, _595, 1.0).xy * vec2(-1.0), _595);
    vec3 _149 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_139 * vec3(dot(_139, _142))) - (vec3(_134) * _142))) * 1.0;
    highp vec3 _600 = (-_550) + ((_149 * dot(_149, _550)) * 2.0);
    highp vec4 _604 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _611 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _615 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _150 = _604.xyz;
    highp vec4 _622 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _628 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _161 = _628.x;
    vec3 _163 = mix(mix(_150, _611.xyz * (_150 / _615.xyz), vec3(0.669921875)), (_622.xyz * (_150 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_161));
    highp vec4 _635 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _215 = _635.x;
    float _216 = _635.y;
    float _213 = _635.z;
    vec3 _172 = _572.xyz;
    vec3 _174 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _221 = clamp(mix(_163, _163 * vec3((_215 <= 0.0) ? 0.0 : pow(_215, 0.300048828125), (_216 <= 0.0) ? 0.0 : pow(_216, 0.300048828125), (_213 <= 0.0) ? 0.0 : pow(_213, 0.300048828125)), vec3(_161 * clamp(1.0 - ((1.0 - _628.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _172, vec3(0.0), vec3(1.0));
    float _222 = clamp((_172 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_550, _174)) * _174) * vec3(2.0)) - _550, _550)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _657 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _161), 0.0, 1.0));
    vec3 _225 = dFdx(_149);
    vec3 _226 = dFdy(_149);
    highp float _663 = clamp(pow(max(dot(_225, _225), dot(_226, _226)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _230 = vec3(0.07999999821186065673828125 * _222);
    highp vec2 _666 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _671 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _666);
    highp vec4 _673 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _666 + vec2(0.0, 0.5));
    vec3 _237 = (_671.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _250 = dot(_237, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _249 = (exp2((_250 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_673 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_149.yzx, 1.0)));
    highp vec4 _688 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler, in_var_TEXCOORD4.zw);
    highp vec4 _695 = clamp((_688 * PrecomputedLightingBuffer_InvUniformPenumbraSizes) + ((PrecomputedLightingBuffer_InvUniformPenumbraSizes * (-0.5)) + vec4(0.5)), vec4(0.0), vec4(1.0));
    highp vec4 _699 = (PrecomputedLightingBuffer_StaticShadowMapMasks * _695) * _695;
    highp vec4 _717 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _258 = mix(1.0, dot(_699, _717), dot(_717, vec4(1.0)));
    highp float _721 = max(0.0, dot(_149, normalize(_550 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _724 = uint(((vec4(_519.x, _519.y, _519.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _733 = (vec2(uvec2(5u, _724)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _735 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _733, 0.0);
    float _272 = _735.z;
    highp float _738 = max(clamp(_657 * (_735.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _276 = clamp(_657 * (_735.y * 2.0), 0.0, 1.0);
    float _262 = mix(_738, _276, _272);
    float _263 = dot(_149, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _745 = float(_724);
    highp vec2 _754 = (vec2(uvec2(0u, _724)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _757 = vec3(1.0) * max(0.0, dot(_149, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _279 = _221 * 0.318407952785491943359375;
    highp float _762 = 1.0 - (_721 * _721);
    float _280 = _738 * _738;
    highp float _763 = _721 * _280;
    highp float _765 = _280 / (_762 + (_763 * _763));
    float _284 = _276 * _276;
    highp float _766 = _721 * _284;
    highp float _768 = _284 / (_762 + (_766 * _766));
    vec4 _298 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _262) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _299 = _298.x;
    float _302 = exp2((-9.28125) * clamp(abs(dot(_149, _550)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _309 = (vec2(-1.0400390625, 1.0400390625) * ((min(_299 * _299, _302) * _299) + _298.y)) + _298.zw;
    float _293 = clamp(_222 * 4.0, 0.0, 1.0);
    highp vec2 _781 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _808 = uvec2(uint(_781.x), uint(_781.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _389;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _389 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _600, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_657, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _389 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _600, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_657, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _333 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _657) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _334 = _333.x;
    vec2 _342 = (vec2(-1.0400390625, 1.0400390625) * ((min(_334 * _334, _302) * _334) + _333.y)) + _333.zw;
    highp vec3 _857 = (((_237 * (_249 / max(9.9999997473787516355514526367188e-06, _250))) * _221) + ((((mix(_757 * _258, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_263 - (max(2.0 * _263, 0.4000000059604644775390625) * (1.0 - sqrt(_258))), -1.0) * 0.5) + 0.5, _663, _745), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _754, 0.0).xyz) * _279) * 1.0) + ((_757 * (((_230 * _309.x) + vec3(_293 * _309.y)) * (mix(min(_765 * _765, 2048.0), min(_768 * _768, 2048.0), _272) * ((_262 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _258))) + (((_389 * mix(1.0, min(_249 / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_657 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_230 * _342.x) + vec3(_293 * _342.y)));
    uint _858 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _808.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _808.x) * 2u;
    uvec4 _866 = texelFetch(ps1, int(_858 + 1u));
    uint _867 = _866.x;
    uint _882 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _883 = min(min(texelFetch(ps1, int(_858)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _885;
    _885 = _857;
    highp vec3 _886;
    SPIRV_CROSS_LOOP
    for (uint _888 = 0u; _888 < _883; _885 = _886, _888++)
    {
        uint _897 = texelFetch(ps2, int(_867 + _888)).x * 6u;
        highp vec4 _899 = texelFetch(ps0, int(_897));
        highp vec4 _901 = texelFetch(ps0, int(_897 + 1u));
        highp vec4 _903 = texelFetch(ps0, int(_897 + 2u));
        highp vec4 _905 = texelFetch(ps0, int(_897 + 3u));
        highp float _906 = _899.w;
        highp float _907 = _906 * _906;
        highp vec3 _908 = _899.xyz;
        highp vec3 _909 = in_var_TEXCOORD8.xyz - _908;
        if ((dot(_909, _909) * _907) > 1.0)
        {
            _886 = _885;
            continue;
        }
        uint _916 = floatBitsToUint(_903.w);
        if (((_916 >> 8u) & _882) == 0u)
        {
            _886 = _885;
            continue;
        }
        highp float _925 = _901.w;
        highp vec4 _940 = vec4(float((_916 & 1u) != 0u), float((_916 & 2u) != 0u), float((_916 & 4u) != 0u), float((_916 & 8u) != 0u));
        highp vec3 _941 = _908 - in_var_TEXCOORD8.xyz;
        highp float _942 = dot(_941, _941);
        highp vec3 _944 = _941 * inversesqrt(_942);
        highp float _961;
        if (_925 == 0.0)
        {
            highp float _953 = _942 * _907;
            highp float _956 = clamp(1.0 - (_953 * _953), 0.0, 1.0);
            _961 = (_956 * _956) * (1.0 / (_942 + 1.0));
        }
        else
        {
            highp vec3 _948 = _941 * _906;
            _961 = pow(1.0 - clamp(dot(_948, _948), 0.0, 1.0), _925);
        }
        highp float _972;
        if (((_916 >> 16u) & 3u) == 2u)
        {
            highp float _969 = clamp((dot(_944, _903.xyz) - _905.x) * _905.y, 0.0, 1.0);
            _972 = _961 * (_969 * _969);
        }
        else
        {
            _972 = _961;
        }
        highp vec3 _1019;
        SPIRV_CROSS_BRANCH
        if (_972 > 0.0)
        {
            float _346 = mix(1.0, dot(_699, _940), dot(_940, vec4(1.0)));
            highp float _980 = max(0.0, dot(_149, normalize(_550 + _944)));
            highp vec4 _982 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _733, 0.0);
            float _356 = _982.z;
            highp float _985 = max(clamp(_657 * (_982.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _360 = clamp(_657 * (_982.y * 2.0), 0.0, 1.0);
            float _347 = mix(_985, _360, _356);
            float _348 = dot(_149, _944);
            highp vec3 _997 = vec3(1.0) * max(0.0, dot(_149, _944));
            highp float _1002 = 1.0 - (_980 * _980);
            float _363 = _985 * _985;
            highp float _1003 = _980 * _363;
            highp float _1005 = _363 / (_1002 + (_1003 * _1003));
            float _367 = _360 * _360;
            highp float _1006 = _980 * _367;
            highp float _1008 = _367 / (_1002 + (_1006 * _1006));
            vec4 _379 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _347) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _380 = _379.x;
            vec2 _388 = (vec2(-1.0400390625, 1.0400390625) * ((min(_380 * _380, _302) * _380) + _379.y)) + _379.zw;
            _1019 = (((mix(_997 * _346, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_348 - (max(2.0 * _348, 0.4000000059604644775390625) * (1.0 - sqrt(_346))), -1.0) * 0.5) + 0.5, _663, _745), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _754, 0.0).xyz) * _279) * 1.0) + ((_997 * (((_230 * _388.x) + vec3(_293 * _388.y)) * (mix(min(_1005 * _1005, 2048.0), min(_1008 * _1008, 2048.0), _356) * ((_347 * 0.25) + 0.25)))) * 1.0)) * ((_901.xyz * _972) * _346);
        }
        else
        {
            _1019 = vec3(0.0);
        }
        _886 = _885 + _1019;
    }
    vec3 _77 = _885 * 1.0;
    vec4 _390 = vec4(_77.x, _77.y, _77.z, _518.w);
    _390.w = 0.0;
    highp vec3 _1023 = min((_390.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1023.x, _1023.y, _1023.z, _390.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

