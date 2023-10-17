// ! M_Teeth_air/Default/FLocalVertexFactory/TMobileBasePassPSFMobileMovableDirectionalLightCSMWithLightmapPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:732-0:h:24:3,0:748-0:h:28:4,0:786-0:m:8:1,0:792-0:h:32:3,0:987-0:h:36:1,0:988-0:h:40:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(6:1[LightmapResourceCluster_LightMapSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(7:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(8:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(9:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(10:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(11:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(12:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(13:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(14:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(15:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(16:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(17:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(18:1[Material_Texture2D_10Sampler])
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

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[10])
#define View_bSubsurfacePostprocessEnabled (pc0_h[9].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[8].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
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
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps7
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
uniform highp vec4 pc0_h[11];


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
uniform mediump vec4 pc4_m[4];


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

vec4 _534;
vec3 _535;

void main()
{
    highp float _544 = 1.0 / gl_FragCoord.w;
    highp vec2 _562 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _571 = vec4(((_562 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _544;
    highp vec3 _580;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _580 = -View_ViewForward;
    }
    else
    {
        _580 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _186 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _591 = vec4(_186, sqrt(clamp(1.0 - dot(_186, _186), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _94 = _591.z + 1.0;
    vec2 _193 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _602 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _605 = _602.x * Material_PreshaderBuffer_1.w;
    vec3 _98 = vec4(_193, sqrt(clamp(1.0 - dot(_193, _193), 0.0, 1.0)), 1.0).xyz * vec3(_605, _605, 1.0);
    vec3 _103 = vec3(_591.xy, _94);
    vec3 _107 = vec3(_98.xy * vec2(-1.0), _98.z);
    vec3 _113 = (_103 * vec3(dot(_103, _107))) - (vec3(_94) * _107);
    float _115 = _113.z + 1.0;
    vec2 _200 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _618 = mix(vec3(0.0, 0.0, 1.0), vec4(_200, sqrt(clamp(1.0 - dot(_200, _200), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _123 = vec3(_113.xy, _115);
    vec3 _127 = vec3(_618.xy * vec2(-1.0), _618.z);
    vec3 _133 = (_123 * vec3(dot(_123, _127))) - (vec3(_115) * _127);
    float _135 = _133.z + 1.0;
    highp vec4 _622 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _207 = (_622.xy * vec2(2.0)) - vec2(1.0);
    highp float _625 = sqrt(clamp(1.0 - dot(_207, _207), 0.0, 1.0));
    vec3 _140 = vec3(_133.xy, _135);
    vec3 _143 = vec3(vec4(_207, _625, 1.0).xy * vec2(-1.0), _625);
    vec3 _150 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_140 * vec3(dot(_140, _143))) - (vec3(_135) * _143))) * 1.0;
    highp vec3 _630 = (-_580) + ((_150 * dot(_150, _580)) * 2.0);
    highp vec4 _634 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _641 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _645 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _151 = _634.xyz;
    highp vec4 _652 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _658 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _162 = _658.x;
    vec3 _164 = mix(mix(_151, _641.xyz * (_151 / _645.xyz), vec3(0.669921875)), (_652.xyz * (_151 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_162));
    highp vec4 _665 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _216 = _665.x;
    float _217 = _665.y;
    float _214 = _665.z;
    vec3 _173 = _602.xyz;
    vec3 _175 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _222 = clamp(mix(_164, _164 * vec3((_216 <= 0.0) ? 0.0 : pow(_216, 0.300048828125), (_217 <= 0.0) ? 0.0 : pow(_217, 0.300048828125), (_214 <= 0.0) ? 0.0 : pow(_214, 0.300048828125)), vec3(_162 * clamp(1.0 - ((1.0 - _658.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _173, vec3(0.0), vec3(1.0));
    float _223 = clamp((_173 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_580, _175)) * _175) * vec3(2.0)) - _580, _580)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _687 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _162), 0.0, 1.0));
    vec3 _226 = dFdx(_150);
    vec3 _227 = dFdy(_150);
    highp float _693 = clamp(pow(max(dot(_226, _226), dot(_227, _227)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _231 = vec3(0.07999999821186065673828125 * _223);
    highp vec2 _696 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _701 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _696);
    highp vec4 _703 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _696 + vec2(0.0, 0.5));
    vec3 _238 = (_701.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _251 = dot(_238, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _250 = (exp2((_251 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_703 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_150.yzx, 1.0)));
    highp float _714 = _571.w;
    highp vec4 _738;
    int _721 = 0;
    for (;;)
    {
        if (_721 < 4)
        {
            if (_714 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_721)])
            {
                _738 = MobileDirectionalLight_DirectionalLightScreenToShadow(_721) * vec4(_571.xy, _714, 1.0);
                break;
            }
            _721++;
            continue;
        }
        else
        {
            _738 = vec4(0.0);
            break;
        }
    }
    float _396;
    if (_738.z > 0.0)
    {
        highp vec2 _748 = (_738.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _749 = fract(_748);
        highp vec2 _753 = (floor(_748) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _759 = vec4((min(1.0 - _738.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _761 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _753, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _759, vec4(0.0), vec4(1.0));
        highp vec4 _766 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _753, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _759, vec4(0.0), vec4(1.0));
        highp vec4 _771 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _753, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _759, vec4(0.0), vec4(1.0));
        highp vec4 _776 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _753, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _759, vec4(0.0), vec4(1.0));
        highp float _778 = _749.x;
        highp float _779 = 1.0 - _778;
        highp vec4 _806 = _534;
        _806.x = (((_761.w * _779) + _761.z) + _766.w) + (_766.z * _778);
        highp vec4 _810 = _806;
        _810.y = (((_761.x * _779) + _761.y) + _766.x) + (_766.y * _778);
        highp vec4 _814 = _810;
        _814.z = (((_771.w * _779) + _771.z) + _776.w) + (_776.z * _778);
        highp vec4 _818 = _814;
        _818.w = (((_771.x * _779) + _771.y) + _776.x) + (_776.y * _778);
        highp float _819 = _749.y;
        highp float _828 = clamp((_714 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _396 = mix(dot(_818, vec4(1.0 - _819, 1.0, 1.0, _819) * 0.111111111938953399658203125), 1.0, _828 * _828);
    }
    else
    {
        _396 = 1.0;
    }
    highp vec4 _847 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _265 = _396 * mix(1.0, dot(vec4(1.0), _847), dot(_847, vec4(1.0)));
    highp float _851 = max(0.0, dot(_150, normalize(_580 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _854 = uint(((vec4(_535.x, _535.y, _535.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _863 = (vec2(uvec2(5u, _854)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _865 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _863, 0.0);
    float _279 = _865.z;
    highp float _868 = max(clamp(_687 * (_865.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _283 = clamp(_687 * (_865.y * 2.0), 0.0, 1.0);
    float _269 = mix(_868, _283, _279);
    float _270 = dot(_150, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _875 = float(_854);
    highp vec2 _884 = (vec2(uvec2(0u, _854)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _887 = vec3(1.0) * max(0.0, dot(_150, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _286 = _222 * 0.318407952785491943359375;
    highp float _892 = 1.0 - (_851 * _851);
    float _287 = _868 * _868;
    highp float _893 = _851 * _287;
    highp float _895 = _287 / (_892 + (_893 * _893));
    float _291 = _283 * _283;
    highp float _896 = _851 * _291;
    highp float _898 = _291 / (_892 + (_896 * _896));
    vec4 _305 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _269) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _306 = _305.x;
    float _309 = exp2((-9.28125) * clamp(abs(dot(_150, _580)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _316 = (vec2(-1.0400390625, 1.0400390625) * ((min(_306 * _306, _309) * _306) + _305.y)) + _305.zw;
    float _300 = clamp(_223 * 4.0, 0.0, 1.0);
    uvec2 _936 = uvec2(uint(_562.x), uint(_562.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _397;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _397 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _630, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_687, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _397 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _630, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_687, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _340 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _687) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _341 = _340.x;
    vec2 _349 = (vec2(-1.0400390625, 1.0400390625) * ((min(_341 * _341, _309) * _341) + _340.y)) + _340.zw;
    highp vec3 _985 = (((_238 * (_250 / max(9.9999997473787516355514526367188e-06, _251))) * _222) + ((((mix(_887 * _265, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_270 - (max(2.0 * _270, 0.4000000059604644775390625) * (1.0 - sqrt(_265))), -1.0) * 0.5) + 0.5, _693, _875), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _884, 0.0).xyz) * _286) * 1.0) + ((_887 * (((_231 * _316.x) + vec3(_300 * _316.y)) * (mix(min(_895 * _895, 2048.0), min(_898 * _898, 2048.0), _279) * ((_269 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _265))) + (((_397 * mix(1.0, min(_250 / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_687 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_231 * _349.x) + vec3(_300 * _349.y)));
    uint _986 = ((((min(uint(max(0.0, log2((_544 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _936.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _936.x) * 2u;
    uvec4 _994 = texelFetch(ps1, int(_986 + 1u));
    uint _995 = _994.x;
    uint _1010 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _1011 = min(min(texelFetch(ps1, int(_986)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1013;
    _1013 = _985;
    highp vec3 _1014;
    SPIRV_CROSS_LOOP
    for (uint _1016 = 0u; _1016 < _1011; _1013 = _1014, _1016++)
    {
        uint _1025 = texelFetch(ps2, int(_995 + _1016)).x * 6u;
        highp vec4 _1027 = texelFetch(ps0, int(_1025));
        highp vec4 _1029 = texelFetch(ps0, int(_1025 + 1u));
        highp vec4 _1031 = texelFetch(ps0, int(_1025 + 2u));
        highp vec4 _1033 = texelFetch(ps0, int(_1025 + 3u));
        highp float _1034 = _1027.w;
        highp float _1035 = _1034 * _1034;
        highp vec3 _1036 = _1027.xyz;
        highp vec3 _1037 = in_var_TEXCOORD8.xyz - _1036;
        if ((dot(_1037, _1037) * _1035) > 1.0)
        {
            _1014 = _1013;
            continue;
        }
        uint _1044 = floatBitsToUint(_1031.w);
        if (((_1044 >> 8u) & _1010) == 0u)
        {
            _1014 = _1013;
            continue;
        }
        highp float _1053 = _1029.w;
        highp vec4 _1068 = vec4(float((_1044 & 1u) != 0u), float((_1044 & 2u) != 0u), float((_1044 & 4u) != 0u), float((_1044 & 8u) != 0u));
        highp vec3 _1069 = _1036 - in_var_TEXCOORD8.xyz;
        highp float _1070 = dot(_1069, _1069);
        highp vec3 _1072 = _1069 * inversesqrt(_1070);
        highp float _1089;
        if (_1053 == 0.0)
        {
            highp float _1081 = _1070 * _1035;
            highp float _1084 = clamp(1.0 - (_1081 * _1081), 0.0, 1.0);
            _1089 = (_1084 * _1084) * (1.0 / (_1070 + 1.0));
        }
        else
        {
            highp vec3 _1076 = _1069 * _1034;
            _1089 = pow(1.0 - clamp(dot(_1076, _1076), 0.0, 1.0), _1053);
        }
        highp float _1100;
        if (((_1044 >> 16u) & 3u) == 2u)
        {
            highp float _1097 = clamp((dot(_1072, _1031.xyz) - _1033.x) * _1033.y, 0.0, 1.0);
            _1100 = _1089 * (_1097 * _1097);
        }
        else
        {
            _1100 = _1089;
        }
        highp vec3 _1147;
        SPIRV_CROSS_BRANCH
        if (_1100 > 0.0)
        {
            float _353 = mix(1.0, dot(vec4(1.0), _1068), dot(_1068, vec4(1.0)));
            highp float _1108 = max(0.0, dot(_150, normalize(_580 + _1072)));
            highp vec4 _1110 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _863, 0.0);
            float _363 = _1110.z;
            highp float _1113 = max(clamp(_687 * (_1110.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _367 = clamp(_687 * (_1110.y * 2.0), 0.0, 1.0);
            float _354 = mix(_1113, _367, _363);
            float _355 = dot(_150, _1072);
            highp vec3 _1125 = vec3(1.0) * max(0.0, dot(_150, _1072));
            highp float _1130 = 1.0 - (_1108 * _1108);
            float _370 = _1113 * _1113;
            highp float _1131 = _1108 * _370;
            highp float _1133 = _370 / (_1130 + (_1131 * _1131));
            float _374 = _367 * _367;
            highp float _1134 = _1108 * _374;
            highp float _1136 = _374 / (_1130 + (_1134 * _1134));
            vec4 _386 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _354) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _387 = _386.x;
            vec2 _395 = (vec2(-1.0400390625, 1.0400390625) * ((min(_387 * _387, _309) * _387) + _386.y)) + _386.zw;
            _1147 = (((mix(_1125 * _353, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_355 - (max(2.0 * _355, 0.4000000059604644775390625) * (1.0 - sqrt(_353))), -1.0) * 0.5) + 0.5, _693, _875), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _884, 0.0).xyz) * _286) * 1.0) + ((_1125 * (((_231 * _395.x) + vec3(_300 * _395.y)) * (mix(min(_1133 * _1133, 2048.0), min(_1136 * _1136, 2048.0), _363) * ((_354 * 0.25) + 0.25)))) * 1.0)) * ((_1029.xyz * _1100) * _353);
        }
        else
        {
            _1147 = vec3(0.0);
        }
        _1014 = _1013 + _1147;
    }
    vec3 _77 = _1013 * 1.0;
    vec4 _398 = vec4(_77.x, _77.y, _77.z, _534.w);
    _398.w = 0.0;
    highp vec3 _1150 = min((_398.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1150.x, _1150.y, _1150.z, _398.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

